import { useState, type FormEvent } from 'react';
import { Input, TextArea, Select } from '../ui/Input';
import { Button } from '../ui/Button';
import { ErrorMessage } from '../ui/ErrorMessage';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // TODO: Send to backend/email service
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setErrors({ submit: 'Something went wrong. Please try again or email us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-600 mb-6">
          Thanks for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button
          variant="ghost"
          size="md"
          onClick={() => setIsSuccess(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
          error={errors.name}
          placeholder="John Smith"
          fullWidth
          required
        />

        <Input
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          error={errors.email}
          placeholder="john@company.com"
          fullWidth
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Company Name"
          value={formData.company}
          onChange={(e) => updateField('company', e.target.value)}
          placeholder="Acme Inc. (Optional)"
          fullWidth
        />

        <Input
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={(e) => updateField('phone', e.target.value)}
          placeholder="+1 (555) 123-4567 (Optional)"
          fullWidth
        />
      </div>

      <Select
        label="What can we help with?"
        value={formData.subject}
        onChange={(e) => updateField('subject', e.target.value)}
        error={errors.subject}
        fullWidth
        required
      >
        <option value="">Select a topic</option>
        <option value="google-ads-management">Google Ads Management</option>
        <option value="ppc-audit">PPC Audit</option>
        <option value="pricing">Pricing Questions</option>
        <option value="technical-support">Technical Support</option>
        <option value="partnership">Partnership Opportunities</option>
        <option value="other">Other</option>
      </Select>

      <TextArea
        label="Message"
        value={formData.message}
        onChange={(e) => updateField('message', e.target.value)}
        error={errors.message}
        placeholder="Tell us about your Google Ads challenge..."
        rows={6}
        fullWidth
        required
      />

      {errors.submit && (
        <ErrorMessage>{errors.submit}</ErrorMessage>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        fullWidth
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        We typically respond within 24 hours. For urgent matters, call us at{' '}
        <a href="tel:+15551234567" className="text-blue-500 hover:underline">
          +1 (555) 123-4567
        </a>
      </p>
    </form>
  );
}
