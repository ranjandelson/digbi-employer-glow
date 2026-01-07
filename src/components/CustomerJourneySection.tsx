import { ClipboardList, HeartPulse, Pill, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import clinicalEvaluationImg from "@/assets/clinical-evaluation.png";
import carePlanImg from "@/assets/care-plan.png";
import prescriptionsImg from "@/assets/prescriptions-approved.png";
import expertSupportImg from "@/assets/expert-support.png";

const steps = [{
  step: 1,
  title: "Clinical and lifestyle evaluation",
  description: "To help us create a care plan that meets your needs.",
  icon: ClipboardList,
  image: clinicalEvaluationImg
}, {
  step: 2,
  title: "Receive a personalized care plan",
  description: "Includes at home tests, devices, medications when needed, and food and lifestyle support 24X7",
  icon: HeartPulse,
  image: carePlanImg
}, {
  step: 3,
  title: "Get your prescriptions, CGM, test kits and labs approved",
  description: "With guidance every step of the way.",
  icon: Pill,
  image: prescriptionsImg
}, {
  step: 4,
  title: "Access expert support at anytime",
  description: "From board-certified doctors, coaches and AI experts.",
  icon: Users,
  image: expertSupportImg
}];

const CustomerJourneySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return; // Disable scroll effect on mobile
    
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      const scrollStart = rect.top;
      const scrollableDistance = sectionHeight - viewportHeight;
      
      if (scrollStart <= 0 && scrollStart >= -scrollableDistance) {
        const progress = Math.abs(scrollStart) / scrollableDistance;
        const stepIndex = Math.min(Math.floor(progress * steps.length), steps.length - 1);
        setActiveStep(stepIndex);
      } else if (scrollStart > 0) {
        setActiveStep(0);
      } else {
        setActiveStep(steps.length - 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Mobile Layout - Simple stacked cards
  if (isMobile) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              How it works
            </span>
            <h2 className="text-3xl font-bold text-foreground">
              Simplifying Whole Person Health
            </h2>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 w-[200px] h-[200px] rounded-full bg-primary/10 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                  <img
                    src={step.image}
                    alt={step.title}
                    className="relative z-10 w-[160px] h-auto rounded-2xl"
                  />
                </div>
                
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm mb-4">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop Layout - Sticky scroll effect
  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: `${100 + steps.length * 100}vh` }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              How it works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Simplifying Whole Person Health   
            </h2>
          </div>

          {/* Content Area */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-4xl mx-auto">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left max-w-md">
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className={`absolute transition-all duration-500 ease-out ${
                    index === activeStep 
                      ? "opacity-100 translate-y-0" 
                      : index < activeStep 
                        ? "opacity-0 -translate-y-8" 
                        : "opacity-0 translate-y-8"
                  }`}
                  style={{ 
                    position: index === activeStep ? 'relative' : 'absolute',
                    pointerEvents: index === activeStep ? 'auto' : 'none'
                  }}
                >
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-6">
                    {step.step}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="flex-1 flex items-center justify-center max-w-[220px]">
              <div className="relative flex items-center justify-center">
                {/* Circle Background */}
                <div className="absolute w-[320px] h-[320px] rounded-full bg-primary/10" />
                
                {/* Images with transition */}
                {steps.map((step, index) => (
                  <img
                    key={step.step}
                    src={step.image}
                    alt={step.title}
                    className={`absolute z-10 w-full h-auto rounded-2xl transition-all duration-500 ease-out ${
                      index === activeStep 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-95"
                    }`}
                  />
                ))}
                {/* Placeholder to maintain size */}
                <img
                  src={steps[0].image}
                  alt=""
                  className="invisible w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeStep ? "bg-primary w-8" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerJourneySection;