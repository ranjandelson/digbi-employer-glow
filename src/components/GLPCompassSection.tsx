import { Target, HeartPulse, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import novoPartnershipImage from "@/assets/novo-nordisk-partnership.png";

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
            Why Employers Choose the GLP Compass
          </h2>
        </div>

        {/* Content Grid with Image and Benefits */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Partnership Image */}
          <div className="order-2 lg:order-1">
            <a 
              href="https://www.fiercebiotech.com/medtech/novo-nordisk-explore-obesity-risk-tests-digbi-health-pilot-project"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={novoPartnershipImage} 
                  alt="Novo Nordisk and Digbi Health partnership - Precision biology for obesity prevention"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground text-center group-hover:text-primary transition-colors">
                Read about our Novo Nordisk partnership →
              </p>
            </a>
          </div>

          {/* Benefits Cards */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GLPCompassSection;
