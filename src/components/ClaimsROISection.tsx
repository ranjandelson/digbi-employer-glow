import { Card } from "@/components/ui/card";
import { DollarSign, Stethoscope, Scale, Brain } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const claimsData = [{
  icon: Scale,
  label: "Obesity and GLP related cost reduction",
  value: "$4,884",
  description: "per member per year",
  barWidth: "53%"
}, {
  icon: Stethoscope,
  label: "Digestive and GI cost reduction",
  value: "$9,240",
  description: "per member per year",
  barWidth: "100%"
}, {
  icon: Brain,
  label: "Anxiety-related cost reduction",
  value: "$1,356",
  description: "per member per year",
  barWidth: "15%"
}];
const ClaimsROISection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id="claims-roi" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-stats">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">100% Fees-At-Risk</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-emerald-900">
            <span className="text-green-900 text-5xl">Financially De-Risked - 9X</span> ROI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple years' claims across seven U.S. self-insured employers. Peer-reviewed. Actuarially Validated.
          </p>
        </div>

        {/* ROI Visualization */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 border-border bg-card/80 backdrop-blur-sm">
            <div className="space-y-8">
              {claimsData.map((item, index) => <div key={item.label} className="group">
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
                      <span className="text-2xl lg:text-3xl font-bold text-emerald-900">
                        -{item.value}
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="ml-16 pl-4">
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-success rounded-full transition-all duration-1000 ease-out" style={{
                    width: isVisible ? item.barWidth : "0%",
                    transitionDelay: `${index * 200}ms`
                  }} />
                    </div>
                  </div>
                </div>)}
            </div>

            {/* Total Highlight */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground text-3xl">Total Annual Savings across conditions</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold text-primary lg:text-3xl">-$15,480</span>
                  <p className="text-sm text-muted-foreground mt-1">PMPY</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default ClaimsROISection;