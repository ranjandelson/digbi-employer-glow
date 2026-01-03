import { Shield, Layers, Rocket, Pill, HeartPulse } from "lucide-react";
import { Card } from "@/components/ui/card";
import digbiHealthCollage from "@/assets/digbi-health-collage.png";
const reasons = [{
  icon: Shield,
  title: "Financially De-risked.",
  description: "Digbi guarantees ROI, placing 100% of fees at risk. All results are verifiable with transparent, claims-based reporting."
}, {
  icon: Layers,
  title: "Consolidate 5 Point Solutions",
  description: "Digbi's versatile Precision Biology platform replaces existing solutions for Obesity, Cardiometabolic, GLP-1 management, Diabetes, and GI care, or integrates seamlessly."
}, {
  icon: Rocket,
  title: "Simple to Launch & Manage",
  description: "Implementation is low-lift for employers and health plans, featuring simple contracting, minimal data exchange, and turnkey claims billing."
}, {
  icon: Pill,
  title: "Reclaim Control of GLP Access and Costs",
  description: "Digbi's versatile Precision Biology telehealth platform holistically tackles Obesity, Cardiometabolic, GLP-1 management, Diabetes, and GI care."
}];
const outcomes = [{
  value: "9.7%",
  label: "Weight loss without drugs"
}, {
  value: "18%",
  label: "Weight loss with drugs"
}, {
  value: "84%",
  label: "GI symptom improvement"
}, {
  value: "1.2%",
  label: "HbA1c reduction"
}, {
  value: "63%",
  label: "Mental health improvement"
}];
const WhyEmployersSection = () => {
  return <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-emerald-800">Why Employers Choose Digbi Health</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">We deliver Real ROI; Not "Vibe ROI". We tackle the root cause of behavior and illness.</p>
        </div>

        {/* Reasons Grid with Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center">
          {/* Left side - Reason cards */}
          <div className="grid gap-6">
            {reasons.map((reason, index) => <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Card>)}
          </div>
          
          {/* Right side - GLP drugs image */}
          <div className="flex items-center justify-center">
            <img src={digbiHealthCollage} alt="Digbi Health comprehensive care featuring doctors, app, DNA gut kit, and GLP-1 medications" className="max-w-full h-auto rounded-2xl" />
          </div>
        </div>

        {/* Clinical Outcomes */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground text-center mb-8">
            Real clinical outcomes.  Backed by Precision Biology. 
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {outcomes.map((outcome, index) => <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                  {outcome.value}
                </div>
                <div className="text-sm lg:text-base text-primary-foreground/80">
                  {outcome.label}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default WhyEmployersSection;