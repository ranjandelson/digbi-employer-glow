import { Card } from "@/components/ui/card";
import { FileText, RefreshCw, Megaphone, BarChart3 } from "lucide-react";

const steps = [{
  step: 1,
  title: "Easy and fast contracting",
  description: "Via direct contract, medical claims, or channel partners.",
  icon: FileText
}, {
  step: 2,
  title: "Exchange eligibility files",
  description: "Seamless, continuous coverage with simple file exchange.",
  icon: RefreshCw
}, {
  step: 3,
  title: "Launch enrollment campaign",
  description: "Culturally tailored to fit your organization's needs.",
  icon: Megaphone
}, {
  step: 4,
  title: "Get regular reports",
  description: "Track engagement, outcomes, and ROI with detailed analytics.",
  icon: BarChart3
}];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works-employers" className="py-16 lg:py-24 bg-gradient-stats">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <RefreshCw className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple Implementation</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How Digbi Health works for Employers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started quickly with our streamlined implementation process designed for busy HR and IT teams.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Step Numbers with Connecting Line - Desktop */}
          <div className="hidden lg:block mb-8 relative">
            {/* Background Line */}
            <div className="absolute left-[calc(12.5%)] right-[calc(12.5%)] top-1/2 h-0.5 bg-primary -translate-y-1/2" />
            
            {/* Step Numbers - Grid aligned with cards */}
            <div className="grid grid-cols-4 gap-4">
              {steps.map((step) => (
                <div key={step.step} className="flex justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10 bg-primary text-primary-foreground">
                    {step.step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step) => (
              <Card
                key={step.title}
                className="p-6 lg:p-8 text-center border-border bg-card shadow-lg"
              >
                {/* Mobile Step Number */}
                <div className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4 bg-primary text-primary-foreground">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-secondary">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;