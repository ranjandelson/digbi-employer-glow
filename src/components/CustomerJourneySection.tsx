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
  return <section id="how-it-works" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Simplifying Whole Person Health   
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto space-y-20 lg:space-y-32">
          {steps.map((step, index) => <div key={step.step} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-16`}>
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-6">
                  {step.step}
                </div>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 w-full max-w-md lg:max-w-none">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent transform rotate-3 scale-105 rounded-none shadow-none" />
                  <img src={step.image} alt={step.title} className="relative w-full h-auto rounded-2xl shadow-lg" />
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default CustomerJourneySection;