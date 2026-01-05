import { Shield, Layers, Rocket, Pill, Users, Heart, TrendingDown, Brain } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Engaged employees",
    description: "Our Precision Biology approach makes it easy for employees to get started and stay engaged: personalized care based on their unique genetics, gut microbiome, and lifestyle factors.",
  },
  {
    icon: Heart,
    title: "Improved health",
    description: "Early intervention helps prevent costly chronic conditions: members see significant improvements in weight, blood sugar, digestive health, and mental wellness.",
  },
  {
    icon: TrendingDown,
    title: "Lower costs",
    description: "Better health outcomes translate to real savings: verified ROI with transparent, claims-based reporting. 100% of fees at risk guarantees results.",
  },
  {
    icon: Brain,
    title: "Root cause treatment",
    description: "We tackle the root cause of behavior and illness, not just symptoms. Precision Biology drives lasting behavior change and sustainable outcomes.",
  },
];

const WhyEmployersSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            A care model that works—for your employees and your bottom line.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Digbi Health combines our science-backed Precision Biology platform with personalized medication management to improve health outcomes and maximize the value of your healthcare spend.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Big stat */}
          <div className="flex flex-col items-center lg:items-start justify-center lg:sticky lg:top-24">
            <p className="text-muted-foreground mb-2 text-lg">Real ROI, not "Vibe ROI"</p>
            <div className="flex items-baseline gap-1">
              <span className="text-8xl lg:text-9xl font-bold text-primary">100</span>
              <span className="text-5xl lg:text-6xl font-bold text-primary">%</span>
            </div>
            <p className="text-2xl lg:text-3xl font-semibold text-foreground mt-2">
              fees at risk
            </p>
            <p className="text-muted-foreground mt-4 text-center lg:text-left max-w-md">
              We guarantee ROI with verifiable, claims-based reporting. If we don't deliver, you don't pay.
            </p>
          </div>

          {/* Right side - Collapsible cards */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <Collapsible
                key={index}
                open={openItem === index}
                onOpenChange={(open) => setOpenItem(open ? index : null)}
              >
                <div className="border border-border rounded-xl bg-card overflow-hidden">
                  <CollapsibleTrigger className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                    </div>
                    <div className="shrink-0 ml-4">
                      {openItem === index ? (
                        <Minus className="w-5 h-5 text-primary" />
                      ) : (
                        <Plus className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground pl-16">
                        {benefit.description}
                      </p>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEmployersSection;