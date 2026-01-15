import { ClipboardList, HeartPulse, Pill, Users } from "lucide-react";
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
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Simplifying Whole Person Health
          </h2>
        </div>

        {/* Steps - Vertical Stack */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.step} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute w-[240px] h-[240px] rounded-full bg-primary/10 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                  <img
                    src={step.image}
                    alt={step.title}
                    className="relative z-10 w-[180px] h-auto rounded-2xl"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  {step.step}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-md">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerJourneySection;