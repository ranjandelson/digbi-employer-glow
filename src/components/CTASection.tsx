import { Mail } from "lucide-react";
const CTASection = () => {
  return <section className="py-16 lg:py-32 bg-gradient-hero relative overflow-hidden">
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
          <p className="text-primary-foreground/80 mb-10 max-w-2xl mx-auto text-3xl">
            Over 100 Employers trust us. Precision Biology is not the future of care. It is the new standard. 
          </p>


          {/* Contact Options */}
          <div className="flex justify-center items-center">
            <a href="mailto:partner@digbihealth.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">partner@digbihealth.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;