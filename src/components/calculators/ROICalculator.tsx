import { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface CalculatorInputs {
  monthlyAdSpend: number;
  clicks: number;
  conversions: number;
  averageOrderValue: number;
  profitMargin: number;
  customerLifetimeValue: number;
}

interface CalculatorResults {
  cpc: number;
  conversionRate: number;
  cpa: number;
  revenue: number;
  profit: number;
  roi: number;
  roas: number;
  lifetimeRevenue: number;
  lifetimeProfit: number;
  lifetimeROI: number;
}

export function ROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyAdSpend: 5000,
    clicks: 500,
    conversions: 25,
    averageOrderValue: 500,
    profitMargin: 40,
    customerLifetimeValue: 1000,
  });

  const [showResults, setShowResults] = useState(false);

  const updateInput = (field: keyof CalculatorInputs, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [field]: parseFloat(value) || 0,
    }));
  };

  const calculate = (): CalculatorResults => {
    const cpc = inputs.clicks > 0 ? inputs.monthlyAdSpend / inputs.clicks : 0;
    const conversionRate = inputs.clicks > 0 ? (inputs.conversions / inputs.clicks) * 100 : 0;
    const cpa = inputs.conversions > 0 ? inputs.monthlyAdSpend / inputs.conversions : 0;
    const revenue = inputs.conversions * inputs.averageOrderValue;
    const profit = revenue * (inputs.profitMargin / 100) - inputs.monthlyAdSpend;
    const roi = inputs.monthlyAdSpend > 0 ? (profit / inputs.monthlyAdSpend) * 100 : 0;
    const roas = inputs.monthlyAdSpend > 0 ? revenue / inputs.monthlyAdSpend : 0;
    const lifetimeRevenue = inputs.conversions * inputs.customerLifetimeValue;
    const lifetimeProfit = lifetimeRevenue * (inputs.profitMargin / 100) - inputs.monthlyAdSpend;
    const lifetimeROI = inputs.monthlyAdSpend > 0 ? (lifetimeProfit / inputs.monthlyAdSpend) * 100 : 0;

    return {
      cpc,
      conversionRate,
      cpa,
      revenue,
      profit,
      roi,
      roas,
      lifetimeRevenue,
      lifetimeProfit,
      lifetimeROI,
    };
  };

  const results = calculate();

  const handleCalculate = () => {
    setShowResults(true);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const formatNumber = (value: number) => {
    return value.toFixed(2);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div>
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Your Campaign Data</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Ad Spend
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={inputs.monthlyAdSpend}
                    onChange={(e) => updateInput('monthlyAdSpend', e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Total Clicks per Month
                </label>
                <input
                  type="number"
                  value={inputs.clicks}
                  onChange={(e) => updateInput('clicks', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Total Conversions per Month
                </label>
                <input
                  type="number"
                  value={inputs.conversions}
                  onChange={(e) => updateInput('conversions', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Order Value
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={inputs.averageOrderValue}
                    onChange={(e) => updateInput('averageOrderValue', e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Profit Margin (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={inputs.profitMargin}
                    onChange={(e) => updateInput('profitMargin', e.target.value)}
                    className="w-full px-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">e.g., 40 for 40% margin</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Customer Lifetime Value (Optional)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={inputs.customerLifetimeValue}
                    onChange={(e) => updateInput('customerLifetimeValue', e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Total revenue per customer over their lifetime</p>
              </div>

              <Button variant="primary" size="lg" fullWidth onClick={handleCalculate}>
                Calculate ROI
              </Button>
            </div>
          </Card>
        </div>

        {/* Results Section */}
        <div>
          <Card className="p-8 sticky top-8">
            <h3 className="text-2xl font-bold mb-6">Your Results</h3>

            {!showResults && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500">Enter your data and click Calculate to see your ROI</p>
              </div>
            )}

            {showResults && (
              <div className="space-y-6">
                {/* Key Metrics */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">Campaign Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Cost Per Click</p>
                      <p className="text-xl font-bold text-gray-900">{formatCurrency(results.cpc)}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Conversion Rate</p>
                      <p className="text-xl font-bold text-gray-900">{formatPercent(results.conversionRate)}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Cost Per Acquisition</p>
                      <p className="text-xl font-bold text-gray-900">{formatCurrency(results.cpa)}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">ROAS</p>
                      <p className="text-xl font-bold text-gray-900">{formatNumber(results.roas)}x</p>
                    </div>
                  </div>
                </div>

                {/* First Purchase Performance */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">First Purchase Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Monthly Revenue</span>
                      <span className="font-bold text-gray-900">{formatCurrency(results.revenue)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Monthly Profit</span>
                      <span className={`font-bold ${results.profit > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {formatCurrency(results.profit)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                      <span className="font-semibold text-gray-900">ROI</span>
                      <span className={`text-2xl font-bold ${results.roi > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {formatPercent(results.roi)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lifetime Value Performance */}
                {inputs.customerLifetimeValue > 0 && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-emerald-900 mb-3">Lifetime Value Performance</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-emerald-800">LTV Revenue</span>
                        <span className="font-bold text-emerald-900">{formatCurrency(results.lifetimeRevenue)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-emerald-800">LTV Profit</span>
                        <span className="font-bold text-emerald-900">{formatCurrency(results.lifetimeProfit)}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-emerald-200">
                        <span className="font-semibold text-emerald-900">LTV ROI</span>
                        <span className="text-xl font-bold text-emerald-600">{formatPercent(results.lifetimeROI)}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Recommendation */}
                <div className={`border-l-4 p-4 rounded ${
                  results.roi > 100 ? 'bg-emerald-50 border-emerald-500' :
                  results.roi > 0 ? 'bg-yellow-50 border-yellow-500' :
                  'bg-red-50 border-red-500'
                }`}>
                  <p className={`font-semibold mb-2 ${
                    results.roi > 100 ? 'text-emerald-900' :
                    results.roi > 0 ? 'text-yellow-900' :
                    'text-red-900'
                  }`}>
                    {results.roi > 100 ? '✓ Strong Performance' :
                     results.roi > 0 ? '⚠ Marginal Performance' :
                     '✗ Losing Money'}
                  </p>
                  <p className={`text-sm ${
                    results.roi > 100 ? 'text-emerald-800' :
                    results.roi > 0 ? 'text-yellow-800' :
                    'text-red-800'
                  }`}>
                    {results.roi > 100 ? 'Your campaigns are profitable. Consider scaling budget by 20% and testing new keywords.' :
                     results.roi > 0 ? 'You\'re barely breaking even. Focus on improving conversion rate or lowering CPA.' :
                     'Your campaigns are unprofitable. Pause underperforming keywords and review your targeting immediately.'}
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
