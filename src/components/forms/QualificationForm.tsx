import { useState, type FormEvent } from 'react';
import { Input, TextArea, Select } from '../ui/Input';
import { Button } from '../ui/Button';
import { Heading } from '../ui/Heading';
import { ErrorMessage } from '../ui/ErrorMessage';

interface FormData {
  // Contact Info
  fullName: string;
  email: string;
  company: string;
  phone: string;

  // Qualification Questions
  monthlyAdSpend: string;
  monthlyRevenue: string;
  timeline: string;
  decisionMaker: string;
  previousAgency: string;
  industry: string;
  primaryGoal: string;
  currentChallenges: string;
  budget: string;
  additionalInfo: string;
}

interface FieldErrors {
  [key: string]: string;
}

/**
 * Lead Scoring Algorithm:
 * - Ad Spend (0-30 points)
 * - Revenue (0-25 points)
 * - Timeline (0-20 points)
 * - Decision Maker (0-15 points)
 * - Goals (0-10 points)
 *
 * Total: 0-100 points
 * - Hot: 80-100 → Cal.com booking
 * - Warm: 60-79 → Manual review
 * - Cold: 40-59 → Nurture sequence
 * - Reject: 0-39 → Resources page
 */

export function QualificationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    monthlyAdSpend: '',
    monthlyRevenue: '',
    timeline: '',
    decisionMaker: '',
    previousAgency: '',
    industry: '',
    primaryGoal: '',
    currentChallenges: '',
    budget: '',
    additionalInfo: '',
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const calculateLeadScore = (data: FormData): number => {
    let score = 0;

    // Ad Spend (0-30 points)
    const adSpendScores: { [key: string]: number } = {
      '0-1k': 0,
      '1k-3k': 5,
      '3k-5k': 10,
      '5k-10k': 15,
      '10k-20k': 20,
      '20k-50k': 25,
      '50k+': 30,
    };
    score += adSpendScores[data.monthlyAdSpend] || 0;

    // Revenue (0-25 points)
    const revenueScores: { [key: string]: number } = {
      '0-10k': 0,
      '10k-50k': 5,
      '50k-100k': 10,
      '100k-250k': 15,
      '250k-500k': 20,
      '500k+': 25,
    };
    score += revenueScores[data.monthlyRevenue] || 0;

    // Timeline (0-20 points)
    const timelineScores: { [key: string]: number } = {
      'just-researching': 0,
      '3-6-months': 5,
      '1-3-months': 10,
      'within-month': 15,
      'asap': 20,
    };
    score += timelineScores[data.timeline] || 0;

    // Decision Maker (0-15 points)
    const decisionMakerScores: { [key: string]: number } = {
      'influencer': 0,
      'recommender': 5,
      'shared-decision': 10,
      'final-decision': 15,
    };
    score += decisionMakerScores[data.decisionMaker] || 0;

    // Primary Goal (0-10 points)
    const goalScores: { [key: string]: number } = {
      'brand-awareness': 2,
      'traffic': 3,
      'leads': 8,
      'sales': 10,
      'roi': 10,
    };
    score += goalScores[data.primaryGoal] || 0;

    return score;
  };

  const getLeadCategory = (score: number): 'hot' | 'warm' | 'cold' | 'reject' => {
    if (score >= 80) return 'hot';
    if (score >= 60) return 'warm';
    if (score >= 40) return 'cold';
    return 'reject';
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FieldErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.company.trim()) newErrors.company = 'Company is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    }

    if (step === 2) {
      if (!formData.monthlyAdSpend) newErrors.monthlyAdSpend = 'Please select your ad spend';
      if (!formData.monthlyRevenue) newErrors.monthlyRevenue = 'Please select your revenue';
      if (!formData.timeline) newErrors.timeline = 'Please select your timeline';
      if (!formData.industry) newErrors.industry = 'Please select your industry';
    }

    if (step === 3) {
      if (!formData.decisionMaker) newErrors.decisionMaker = 'Please select your role';
      if (!formData.primaryGoal) newErrors.primaryGoal = 'Please select your primary goal';
      if (!formData.budget) newErrors.budget = 'Please select your budget';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    try {
      const score = calculateLeadScore(formData);
      const category = getLeadCategory(score);

      // TODO: Send to Airtable/backend
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          score,
          category,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Redirect based on lead category
        const redirectUrls = {
          hot: '/thank-you/hot',
          warm: '/thank-you/warm',
          cold: '/thank-you/cold',
          reject: '/resources',
        };
        window.location.href = redirectUrls[category];
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Step {currentStep} of 3
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round((currentStep / 3) * 100)}% Complete
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Contact Information */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <Heading as="h2" size="3xl" className="mb-2">
              Let's Get Started
            </Heading>
            <p className="text-gray-600 mb-8">
              Tell us about yourself and your business
            </p>

            <Input
              label="Full Name"
              value={formData.fullName}
              onChange={(e) => updateFormData('fullName', e.target.value)}
              error={errors.fullName}
              placeholder="John Smith"
              fullWidth
              required
            />

            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              error={errors.email}
              placeholder="john@company.com"
              fullWidth
              required
            />

            <Input
              label="Company Name"
              value={formData.company}
              onChange={(e) => updateFormData('company', e.target.value)}
              error={errors.company}
              placeholder="Acme Inc."
              fullWidth
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              error={errors.phone}
              placeholder="+1 (555) 123-4567"
              fullWidth
              required
            />
          </div>
        )}

        {/* Step 2: Business Details */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <Heading as="h2" size="3xl" className="mb-2">
              Your Business
            </Heading>
            <p className="text-gray-600 mb-8">
              Help us understand your current situation
            </p>

            <Select
              label="Current Monthly Google Ads Spend"
              value={formData.monthlyAdSpend}
              onChange={(e) => updateFormData('monthlyAdSpend', e.target.value)}
              error={errors.monthlyAdSpend}
              fullWidth
              required
            >
              <option value="">Select amount</option>
              <option value="0-1k">$0 - $1,000 (Just getting started)</option>
              <option value="1k-3k">$1,000 - $3,000</option>
              <option value="3k-5k">$3,000 - $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-20k">$10,000 - $20,000</option>
              <option value="20k-50k">$20,000 - $50,000</option>
              <option value="50k+">$50,000+</option>
            </Select>

            <Select
              label="Monthly Revenue"
              value={formData.monthlyRevenue}
              onChange={(e) => updateFormData('monthlyRevenue', e.target.value)}
              error={errors.monthlyRevenue}
              fullWidth
              required
            >
              <option value="">Select range</option>
              <option value="0-10k">$0 - $10,000</option>
              <option value="10k-50k">$10,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k-250k">$100,000 - $250,000</option>
              <option value="250k-500k">$250,000 - $500,000</option>
              <option value="500k+">$500,000+</option>
            </Select>

            <Select
              label="When Are You Looking to Start?"
              value={formData.timeline}
              onChange={(e) => updateFormData('timeline', e.target.value)}
              error={errors.timeline}
              fullWidth
              required
            >
              <option value="">Select timeline</option>
              <option value="asap">Immediately / ASAP</option>
              <option value="within-month">Within the next month</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="just-researching">Just researching options</option>
            </Select>

            <Select
              label="Industry"
              value={formData.industry}
              onChange={(e) => updateFormData('industry', e.target.value)}
              error={errors.industry}
              fullWidth
              required
            >
              <option value="">Select industry</option>
              <option value="ecommerce">E-commerce</option>
              <option value="saas">SaaS / Software</option>
              <option value="b2b-services">B2B Services</option>
              <option value="home-services">Home Services</option>
              <option value="finance">Finance / Insurance</option>
              <option value="health">Health / Wellness</option>
              <option value="education">Education</option>
              <option value="real-estate">Real Estate</option>
              <option value="legal">Legal Services</option>
              <option value="other">Other</option>
            </Select>

            <Select
              label="Have You Worked With a Google Ads Agency Before?"
              value={formData.previousAgency}
              onChange={(e) => updateFormData('previousAgency', e.target.value)}
              fullWidth
            >
              <option value="">Select option</option>
              <option value="no">No, managing in-house or DIY</option>
              <option value="yes-unhappy">Yes, but unhappy with results</option>
              <option value="yes-switching">Yes, actively looking to switch</option>
              <option value="yes-expanding">Yes, looking to expand</option>
            </Select>
          </div>
        )}

        {/* Step 3: Goals & Decision Making */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <Heading as="h2" size="3xl" className="mb-2">
              Your Goals
            </Heading>
            <p className="text-gray-600 mb-8">
              What are you looking to achieve?
            </p>

            <Select
              label="What's Your Role in This Decision?"
              value={formData.decisionMaker}
              onChange={(e) => updateFormData('decisionMaker', e.target.value)}
              error={errors.decisionMaker}
              fullWidth
              required
            >
              <option value="">Select role</option>
              <option value="final-decision">I make the final decision</option>
              <option value="shared-decision">I share decision-making authority</option>
              <option value="recommender">I recommend, others approve</option>
              <option value="influencer">I influence, don't approve budget</option>
            </Select>

            <Select
              label="Primary Goal for Google Ads"
              value={formData.primaryGoal}
              onChange={(e) => updateFormData('primaryGoal', e.target.value)}
              error={errors.primaryGoal}
              fullWidth
              required
            >
              <option value="">Select primary goal</option>
              <option value="roi">Maximize ROI / Profitability</option>
              <option value="sales">Increase sales revenue</option>
              <option value="leads">Generate qualified leads</option>
              <option value="traffic">Drive website traffic</option>
              <option value="brand-awareness">Build brand awareness</option>
            </Select>

            <Select
              label="Monthly Budget for PPC Management"
              value={formData.budget}
              onChange={(e) => updateFormData('budget', e.target.value)}
              error={errors.budget}
              fullWidth
              required
            >
              <option value="">Select budget range</option>
              <option value="2.5k">$2,500/month (Growth Plan)</option>
              <option value="4.5k">$4,500/month (Scale Plan)</option>
              <option value="custom">Custom / Enterprise</option>
              <option value="not-sure">Not sure yet</option>
            </Select>

            <TextArea
              label="Current Biggest Challenge with Google Ads"
              value={formData.currentChallenges}
              onChange={(e) => updateFormData('currentChallenges', e.target.value)}
              placeholder="e.g., High CPA, low conversion rate, wasted spend..."
              rows={4}
              fullWidth
            />

            <TextArea
              label="Anything Else We Should Know?"
              value={formData.additionalInfo}
              onChange={(e) => updateFormData('additionalInfo', e.target.value)}
              placeholder="Any additional context or questions..."
              rows={3}
              fullWidth
            />
          </div>
        )}

        {/* Error Message */}
        {errors.submit && (
          <div className="mt-6">
            <ErrorMessage>{errors.submit}</ErrorMessage>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="ghost"
              size="lg"
              onClick={handleBack}
              disabled={isSubmitting}
            >
              Back
            </Button>
          )}

          {currentStep < 3 ? (
            <Button
              type="button"
              variant="primary"
              size="lg"
              onClick={handleNext}
              fullWidth={currentStep === 1}
            >
              Continue
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              fullWidth
            >
              {isSubmitting ? 'Submitting...' : 'Get My Free Analysis'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
