import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, DollarSign, Users, TrendingUp } from "lucide-react";
const SavingsCalculator = () => {
  const [coveredLives, setCoveredLives] = useState([5000]);

  // Calculation based on typical employer savings
  const savingsPerMember = 3012;
  const totalSavings = coveredLives[0] * savingsPerMember * 0.15; // Assuming 15% enrollment
  const roi = 2.4;
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  return <section className="py-16 lg:py-32 bg-gradient-stats">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Savings Calculator</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Find out how much you could save
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our model accounts for members with obesity, diabetes, GI, mental health, hypertension, and hyperlipidemia based on the lives covered by your organization.
            </p>
          </div>

          {/* Calculator Card */}
          <Card className="p-8 lg:p-12 shadow-lg border-border bg-card">
            <div className="space-y-10">
              {/* Slider Section */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <label className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Covered Lives
                  </label>
                  <span className="text-2xl font-bold text-primary">
                    {coveredLives[0].toLocaleString()}
                  </span>
                </div>
                <Slider value={coveredLives} onValueChange={setCoveredLives} min={1000} max={50000} step={500} className="w-full" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1,000</span>
                  <span>50,000</span>
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-secondary rounded-xl text-center">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                    {formatCurrency(savingsPerMember)}
                  </div>
                  <div className="text-sm text-muted-foreground">Savings per member/year</div>
                </div>

                <div className="p-6 bg-primary rounded-xl text-center">
                  <TrendingUp className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">
                    {formatCurrency(totalSavings)}
                  </div>
                  <div className="text-sm text-primary-foreground/80">Estimated annual savings</div>
                </div>

                <div className="p-6 bg-success rounded-xl text-center">
                  <div className="w-8 h-8 text-success-foreground mx-auto mb-3 flex items-center justify-center font-bold text-xl">
                    ×
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-success-foreground mb-1">
                    {roi}x
                  </div>
                  <div className="text-sm text-success-foreground/80">ROI</div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <a href="https://cdn.shopify.com/s/files/1/2078/0145/files/6_pager_Precision-Biology-Telehealth-Actuarially-Validated-Medical-Cost-Savings_1.pdf?v=1768881682" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg">
                    Read Digbi's ROI study
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default SavingsCalculator;