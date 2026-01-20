import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import digbiLogo from "@/assets/digbi-health-logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    label: "For Employers",
    href: "#employers"
  }, {
    label: "How It Works",
    href: "#how-it-works"
  }, {
    label: "Outcomes",
    href: "#outcomes"
  }, {
    label: "FAQs",
    href: "#faqs"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={digbiLogo} alt="Digbi Health" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <a key={link.label} href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                {link.label}
              </a>)}
          </nav>


          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.label} href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>)}
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;