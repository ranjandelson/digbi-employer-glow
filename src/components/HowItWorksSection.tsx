import { Card } from "@/components/ui/card";
import { FileText, RefreshCw, Megaphone, BarChart3, ArrowRight } from "lucide-react";
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
  return <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-stats">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <RefreshCw className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple Implementation</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">How Digbi Health  works for Employers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started quickly with our streamlined implementation process designed for busy HR and IT teams.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 max-w-6xl mx-auto">
          {steps.map((step, index) => <div key={step.title} className="relative">
              <Card className="p-6 lg:p-8 h-full transition-all duration-300 hover:shadow-lg border-border bg-card relative">
                {/* Step Number - Positioned on the right */}
                <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center font-bold text-lg bg-zinc-50 rounded-2xl text-[#481ad1]/[0.63] border-0 border-white">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
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

              {/* Connector Arrow */}
              {index < steps.length - 1 && <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary/30" />
                </div>}
            </div>)}
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;