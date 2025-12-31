import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to transform your benefits?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Partner with Digbi Health to reduce healthcare costs while improving employee health outcomes with precision biology care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero-outline" size="xl">
              Book Your Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a
              href="tel:+1-508-443-4424"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-medium">(508)-443-4424</span>
            </a>
            <a
              href="mailto:employers@digbihealth.com"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">employers@digbihealth.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
