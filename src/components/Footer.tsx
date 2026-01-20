import { Heart } from "lucide-react";
import digbiLogoWhite from "@/assets/digbi-health-logo-white.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#" },
      { label: "Press", href: "https://digbihealth.com/blogs/press-release" },
      { label: "Contact", href: "#" },
    ],
    solutions: [
      { label: "For Employers", href: "#employers" },
      { label: "For Health Plans", href: "#" },
      { label: "For Individuals", href: "#" },
    ],
    resources: [
      { label: "Blog", href: "#" },
      { label: "Research", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "FAQs", href: "#faqs" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "HIPAA Compliance", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center mb-6">
              <img src={digbiLogoWhite} alt="Digbi Health" className="h-10 w-auto" />
            </a>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Precision biology care to prevent and treat obesity, diabetes, and metabolic disorders.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Digbi Health. All rights reserved.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-current" /> for better health
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
