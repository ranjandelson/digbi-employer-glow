import { Target, HeartPulse, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Target,
    title: "Avoids Unnecessary GLP Spend (Right Patient, Right Therapy)",
    description: "GLP Compass uses precision biology to determine who can reach the target weight without GLP drugs. ~30% of GLP-eligible employees choose not to start the drug—delivering immediate cost savings for employers and families."
  },
  {
    icon: HeartPulse,
    title: "5× Lower Discontinuation Through Integrated Metabolic + GI Care",
    description: "While typical GLP programs see >30% discontinuation due to GI distress, Digbi's unified metabolic and gastrointestinal care reduces GI-related discontinuation to <6%, preserving outcomes and eliminating wasted drug spend."
  },
  {
    icon: TrendingDown,
    title: "Prevent Rebound and Repeat Drug Costs",
    description: "When employees need or want to stop GLPs, Digbi guides them off safely using gut microbiome, genetics, and glucose data—maintaining weight loss and preventing rebound that drives re-initiation, higher claims, and long-term dependency."
  }
];

const GLPCompassSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Employers Choose the GLP Compass™ Telehealth Program
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 lg:p-8 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GLPCompassSection;
