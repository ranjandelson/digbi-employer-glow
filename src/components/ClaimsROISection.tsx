import { Card } from "@/components/ui/card";
import { DollarSign, Stethoscope, Scale, Brain, TrendingDown } from "lucide-react";

const claimsData = [
  {
    icon: Stethoscope,
    label: "Digestive and GI cost reduction",
    value: "$9,240+",
    description: "per member per year",
    barWidth: "100%",
  },
  {
    icon: Scale,
    label: "Obesity-related medical cost reduction",
    value: "$4,884+",
    description: "per member per year",
    barWidth: "53%",
  },
  {
    icon: TrendingDown,
    label: "Overall medical spend reduction",
    value: "$3,012",
    description: "per member per year",
    barWidth: "33%",
  },
  {
    icon: Brain,
    label: "Anxiety-related medical cost reduction",
    value: "$1,356+",
    description: "per member per year",
    barWidth: "15%",
  },
];

const ClaimsROISection = () => {
  return (
    <section id="claims-roi" className="py-20 lg:py-32 bg-gradient-stats">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Claims Validated</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">9X</span> ROI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verified cost reductions across multiple health categories, backed by real claims data.
          </p>
        </div>

        {/* ROI Visualization */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 border-border bg-card/80 backdrop-blur-sm">
            <div className="space-y-8">
              {claimsData.map((item, index) => (
                <div key={item.label} className="group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base lg:text-lg font-semibold text-foreground truncate">
                        {item.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-2xl lg:text-3xl font-bold text-success">
                        -{item.value}
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="ml-16 pl-4">
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-success rounded-full transition-all duration-1000 ease-out"
                        style={{ width: item.barWidth }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Highlight */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Combined Annual Savings Potential</p>
                  <p className="text-lg font-medium text-foreground">Per eligible member</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl lg:text-5xl font-bold text-primary">$18,492+</span>
                  <p className="text-sm text-muted-foreground mt-1">per year</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClaimsROISection;
