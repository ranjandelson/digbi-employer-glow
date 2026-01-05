import { Shield, Layers, Rocket, Pill } from "lucide-react";
import { Card } from "@/components/ui/card";
import digbiHealthCollage from "@/assets/digbi-health-collage.png";

const features = [
  {
    icon: Shield,
    title: "Financially De-risked.",
    description:
      "Digbi guarantees ROI, placing 100% of fees at risk. All results are verifiable with transparent, claims-based reporting.",
  },
  {
    icon: Layers,
    title: "Consolidate 5 Point Solutions",
    description:
      "Digbi's versatile Precision Biology platform can replace existing point solutions for weight and GLP-1 medication management, cardiometabolic care, diabetes management, and digestive care, or offer a best-in-class point solution to enhance your existing offerings.",
  },
  {
    icon: Rocket,
    title: "Simple to Launch & Manage",
    description:
      "Implementation is low-lift for employers and health plans, featuring simple contracting, minimal data exchange, and turnkey claims billing.",
  },
  {
    icon: Pill,
    title: "Reclaim Control of GLP Access and Costs",
    description:
      "GLP Compass offers the right care - lifestyle and medication - based on Precision Biology PLUS fulfillment through PBM, employee cash pay, employer direct pay or 340B.",
  },
];

const outcomes = [
  { value: "9.7%", label: "Weight loss without drugs" },
  { value: "18%", label: "Weight loss with drugs" },
  { value: "84%", label: "GI symptom improvement" },
  { value: "1.2%", label: "HbA1c reduction" },
  { value: "63%", label: "Mental health improvement" },
];

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Shield;
  title: string;
  description: string;
}) => (
  <Card className="p-6 lg:p-8 bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow h-full">
    <div className="flex flex-col h-full">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  </Card>
);

const WhyEmployersSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Why Employers Choose Digbi Health
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We deliver Real ROI; Not "Vibe ROI". We tackle the root cause of behavior and illness.
          </p>
        </div>

        {/* Feature Row 1: Card + Card + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          <FeatureCard
            icon={features[0].icon}
            title={features[0].title}
            description={features[0].description}
          />
          <FeatureCard
            icon={features[1].icon}
            title={features[1].title}
            description={features[1].description}
          />
          <div className="flex items-center justify-center lg:row-span-1">
            <img
              src={digbiHealthCollage}
              alt="Digbi Health comprehensive care featuring doctors, app, DNA gut kit, and GLP-1 medications"
              className="w-full h-full object-cover rounded-2xl shadow-sm"
            />
          </div>
        </div>

        {/* Feature Row 2: Image + Card + Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <div className="hidden lg:flex items-center justify-center order-last lg:order-first">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
              alt="Healthcare professional providing personalized care"
              className="w-full h-full object-cover rounded-2xl shadow-sm"
            />
          </div>
          <FeatureCard
            icon={features[2].icon}
            title={features[2].title}
            description={features[2].description}
          />
          <FeatureCard
            icon={features[3].icon}
            title={features[3].title}
            description={features[3].description}
          />
          {/* Mobile-only image */}
          <div className="lg:hidden flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
              alt="Healthcare professional providing personalized care"
              className="w-full h-auto rounded-2xl shadow-sm"
            />
          </div>
        </div>

        {/* Clinical Outcomes */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground text-center mb-8">
            Real clinical outcomes. Backed by Precision Biology.
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                  {outcome.value}
                </div>
                <div className="text-sm lg:text-base text-primary-foreground/80">
                  {outcome.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEmployersSection;