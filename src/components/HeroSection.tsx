import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Activity, Pill, Scale, Droplets } from "lucide-react";

const conditions = [
  { icon: Scale, label: "Obesity" },
  { icon: Droplets, label: "Diabetes" },
  { icon: Heart, label: "Hypertension" },
  { icon: Activity, label: "Heart Health" },
  { icon: Pill, label: "Cholesterol" },
];

const HeroSection = () => {
  return (
    <section id="employers" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full animate-fade-in">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by Leading Employers
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Treat five conditions with{" "}
              <span className="text-gradient">one solution</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Curb healthcare costs with comprehensive precision biology care for obesity, diabetes, and cardiometabolic health.
            </p>

            {/* Condition Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {conditions.map((condition, index) => (
                <div
                  key={condition.label}
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <condition.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{condition.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="lg">
                Book Your Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-8 bg-gradient-hero rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-12 bg-gradient-hero rounded-full opacity-30" />
              <div className="absolute inset-16 bg-card rounded-full shadow-lg flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-gradient mb-2">5</div>
                  <div className="text-lg text-muted-foreground">Conditions Covered</div>
                </div>
              </div>

              {/* Floating Elements */}
              {conditions.map((condition, index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180);
                const radius = 45;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                return (
                  <div
                    key={condition.label}
                    className="absolute w-14 h-14 bg-card rounded-xl shadow-card flex items-center justify-center border border-border hover:scale-110 transition-transform cursor-pointer"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <condition.icon className="w-6 h-6 text-primary" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
