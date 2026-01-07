import { Card } from "@/components/ui/card";
import { FileText, RefreshCw, Megaphone, BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress through the section
      const scrollStart = rect.top;
      const scrollEnd = rect.bottom - viewportHeight;
      const scrollRange = sectionHeight - viewportHeight;
      
      if (scrollStart <= 0 && scrollEnd >= 0) {
        const currentProgress = Math.abs(scrollStart) / scrollRange;
        setProgress(Math.min(Math.max(currentProgress, 0), 1));
      } else if (scrollStart > 0) {
        setProgress(0);
      } else {
        setProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate which step is active and the line progress
  const activeStep = Math.floor(progress * steps.length);
  const lineProgress = progress * 100;

  return (
    <section 
      ref={sectionRef}
      id="how-it-works" 
      className="relative bg-gradient-stats"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
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

          {/* Steps Timeline */}
          <div className="max-w-6xl mx-auto">
            {/* Step Numbers with Connecting Line - Desktop */}
            <div className="hidden lg:flex items-center justify-between mb-8 relative px-[72px]">
              {/* Background Line */}
              <div className="absolute left-[72px] right-[72px] top-1/2 h-0.5 bg-primary/20 -translate-y-1/2" />
              
              {/* Animated Progress Line */}
              <div 
                className="absolute left-[72px] top-1/2 h-0.5 bg-primary -translate-y-1/2 transition-all duration-300 ease-out"
                style={{ width: `calc(${Math.min(lineProgress, 100)}% - 144px)` }}
              />
              
              {/* Step Numbers */}
              {steps.map((step, index) => {
                const isActive = index <= activeStep;
                const isCurrentlyAnimating = index === activeStep;
                
                return (
                  <div
                    key={step.step}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10 transition-all duration-500 ${
                      isActive 
                        ? "bg-primary text-primary-foreground scale-110" 
                        : "bg-primary/20 text-primary"
                    } ${isCurrentlyAnimating ? "ring-4 ring-primary/30" : ""}`}
                  >
                    {step.step}
                  </div>
                );
              })}
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {steps.map((step, index) => {
                const isActive = index <= activeStep;
                const delay = index * 0.1;
                
                return (
                  <Card
                    key={step.title}
                    className={`p-6 lg:p-8 text-center transition-all duration-500 border-border bg-card ${
                      isActive 
                        ? "opacity-100 translate-y-0 shadow-lg" 
                        : "opacity-40 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${delay}s` }}
                  >
                    {/* Mobile Step Number */}
                    <div className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4 transition-all duration-500 ${
                      isActive 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-primary/20 text-primary"
                    }`}>
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${
                      isActive ? "bg-secondary" : "bg-secondary/50"
                    }`}>
                      <step.icon className={`w-7 h-7 transition-all duration-500 ${
                        isActive ? "text-primary" : "text-primary/50"
                      }`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            {/* Decorative Dots */}
            <div className="flex justify-center gap-2 mt-10">
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index <= activeStep ? "bg-primary scale-110" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
