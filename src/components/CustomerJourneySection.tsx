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

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
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
};

export default CustomerJourneySection;