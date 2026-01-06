import heroImage from "@/assets/hero-image.png";
import cdcLogo from "@/assets/cdc-partner-logo.png";
import { Check } from "lucide-react";
const HeroSection = () => {
  return <section id="employers" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 flex flex-col justify-center">
            {/* CDC Partner Logo */}
            <div className="animate-fade-in">
              <img src={cdcLogo} alt="CDC Full Plus Partner" className="h-14 lg:h-16 w-auto" />
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full animate-fade-in w-fit bg-white/[0.77]">
              <Check className="w-5 h-5 text-success" />
              <span className="font-medium text-muted-foreground text-xl">
                Trusted by over 100 Employers  
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              Treat five conditions with{" "}
              <span className="text-gradient">Precision Biology</span>
            </h1>

            {/* Subheadline */}
            <p style={{
            animationDelay: "0.2s"
          }} className="max-w-lg animate-fade-in text-2xl text-[#5c527a]">Curb healthcare costs with ONE platform for Obesity, Metabolic and GI health</p>

          </div>

          {/* Hero Visual */}
          <div className="relative animate-fade-in flex flex-col items-center justify-center" style={{
          animationDelay: "0.3s"
        }}>
            <img src={heroImage} alt="Diverse workforce - construction workers, office professionals, and business teams" className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;