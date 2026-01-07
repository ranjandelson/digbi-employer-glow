import { Target, HeartPulse, TrendingDown, Settings2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import novoPartnershipImage from "@/assets/novo-nordisk-partnership.png";

const benefits = [{
  id: "right-patient",
  icon: Target,
  title: "Avoids Unnecessary GLP Spend (Right Patient, Right Therapy)",
  description: "GLP Compass uses precision biology to determine who can reach the target weight without GLP drugs. ~30% of GLP-eligible employees choose not to start the drug—delivering immediate cost savings for employers and families."
}, {
  id: "lower-discontinuation",
  icon: HeartPulse,
  title: "5× Lower Discontinuation Through Integrated Metabolic + GI Care",
  description: "While typical GLP programs see >30% discontinuation due to GI distress, Digbi's unified metabolic and gastrointestinal care reduces GI-related discontinuation to <6%, preserving outcomes and eliminating wasted drug spend."
}, {
  id: "prevent-rebound",
  icon: TrendingDown,
  title: "Prevent Rebound and Repeat Drug Costs",
  description: "When employees need or want to stop GLPs, Digbi guides them off safely using gut microbiome, genetics, and glucose data—maintaining weight loss and preventing rebound that drives re-initiation, higher claims, and long-term dependency."
}, {
  id: "flexible-access",
  icon: Settings2,
  title: "Flexible Access and Seamless Integration",
  description: "A customizable solution integrates with PBM, carriers, and offers medication access via PBM, as well as direct employer subsidies or employee cash pay."
}];

const GLPCompassSection = () => {
  return <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1a0d26]">
            Why Employers Choose GLP Compass™
          </h2>
        </div>

        {/* Content Grid with Image and Benefits */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Partnership Image */}
          <div className="order-2 lg:order-1">
            <a href="https://www.fiercebiotech.com/medtech/novo-nordisk-explore-obesity-risk-tests-digbi-health-pilot-project" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img src={novoPartnershipImage} alt="Novo Nordisk and Digbi Health partnership - Precision biology for obesity prevention" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground text-center group-hover:text-primary transition-colors">
                Read about our Novo Nordisk partnership →
              </p>
            </a>
          </div>

          {/* Benefits Cards - Collapsible */}
          <Accordion type="single" collapsible defaultValue="right-patient" className="order-1 lg:order-2 space-y-4">
            {benefits.map((benefit) => (
              <AccordionItem key={benefit.id} value={benefit.id} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground text-left">
                      {benefit.title}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-16 pb-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>;
};

export default GLPCompassSection;