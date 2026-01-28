import { useState, useRef, useEffect } from "react";
import { Menu, ChevronDown, Briefcase, Stethoscope, Users, Star, FlaskConical, FileText, Info, Newspaper, Calendar, HelpCircle, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Navigation configuration - easily update items and icons here
const navConfig = [
  {
    label: "Partner",
    items: [
      { 
        label: "Employers & Payers", 
        href: "https://digbihealth.com/pages/partner",
        icon: Briefcase
      },
      { 
        label: "Health Care Providers", 
        href: "https://digbihealth.com/pages/health-care-providers",
        icon: Stethoscope
      },
    ],
  },
  {
    label: "Humans of Digbi",
    items: [
      { 
        label: "Humans of Digbi", 
        href: "https://digbihealth.com/blogs/humans-of-digbi",
        icon: Users
      },
      { 
        label: "Member Reviews", 
        href: "https://digbihealth.com/pages/reviews",
        icon: Star
      },
    ],
  },
  {
    label: "The Science",
    items: [
      { 
        label: "Blog: Pharma & Science", 
        href: "https://digbihealth.com/blogs/science-talk",
        icon: FlaskConical
      },
      { 
        label: "Published Research", 
        href: "https://digbihealth.com/blogs/published-research",
        icon: FileText
      },
    ],
  },
  {
    label: "About Us",
    items: [
      { 
        label: "About Us", 
        href: "https://digbihealth.com/pages/about-us",
        icon: Info
      },
      { 
        label: "Press Releases", 
        href: "https://digbihealth.com/blogs/press-release",
        icon: Newspaper
      },
      { 
        label: "Careers", 
        href: "https://digbihealth.com/a/careers",
        icon: UserCheck
      },
      { 
        label: "Events", 
        href: "https://digbihealth.com/pages/digbi-live",
        icon: Calendar
      },
      { 
        label: "Help", 
        href: "https://digbihealth.com/pages/help",
        icon: HelpCircle
      },
    ],
  },
];

interface DropdownMenuProps {
  label: string;
  items: {
    label: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  id: string;
}

const DropdownMenu = ({ label, items, isOpen, onOpen, onClose, id }: DropdownMenuProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
        triggerRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (isOpen) {
        onClose();
      } else {
        onOpen();
      }
    }
  };

  const handleMouseEnter = () => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    onOpen();
  };

  const handleMouseLeave = () => {
    // Delay closing to allow moving to dropdown content
    closeTimeoutRef.current = setTimeout(() => {
      onClose();
    }, 150);
  };

  return (
    <div 
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={triggerRef}
        onClick={() => isOpen ? onClose() : onOpen()}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={`dropdown-${id}`}
        className={cn(
          "flex items-center gap-1.5 px-2 py-2 text-sm font-medium transition-colors rounded-md",
          "text-foreground/80 hover:text-[#4F26B7] focus:text-[#4F26B7]",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F26B7] focus-visible:ring-offset-2",
          isOpen && "text-[#4F26B7]"
        )}
      >
        {label}
        <ChevronDown 
          className={cn(
            "h-4 w-4 transition-transform duration-150",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      {isOpen && (
        <div
          id={`dropdown-${id}`}
          role="menu"
          aria-orientation="vertical"
          className="absolute top-full left-0 pt-1 z-50"
        >
          {/* Invisible bridge to prevent gap issues */}
          <div className="min-w-[220px] bg-background border border-border rounded-lg shadow-lg py-2 animate-fade-in">
            {items.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  role="menuitem"
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                    "text-muted-foreground hover:text-[#4F26B7] hover:bg-accent/50",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4F26B7]"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent className="h-4 w-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownOpen = (label: string) => {
    setOpenDropdown(label);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center h-16 lg:h-20">
          {/* Logo - flex: 0 0 auto */}
          <a href="/" className="flex-shrink-0 flex items-center">
            <img 
              src="https://cdn.shopify.com/s/files/1/2078/0145/files/digbi_logo.svg" 
              alt="Digbi Health" 
              className="h-10 lg:h-12 w-auto" 
            />
          </a>

          {/* Desktop Navigation - flex: 1 */}
          <nav className="hidden lg:flex flex-1" aria-label="Main navigation">
            <ul className="flex justify-evenly w-full gap-4">
              {navConfig.map((navItem) => (
                <li key={navItem.label}>
                  <DropdownMenu
                    label={navItem.label}
                    items={navItem.items}
                    isOpen={openDropdown === navItem.label}
                    onOpen={() => handleDropdownOpen(navItem.label)}
                    onClose={handleDropdownClose}
                    id={navItem.label.toLowerCase().replace(/\s+/g, "-")}
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button 
                className="lg:hidden ml-auto p-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F26B7] rounded-md" 
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <a href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <img 
                      src="https://cdn.shopify.com/s/files/1/2078/0145/files/digbi_logo.svg" 
                      alt="Digbi Health" 
                      className="h-8 w-auto" 
                    />
                  </a>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 overflow-y-auto py-4" aria-label="Mobile navigation">
                  <Accordion type="single" collapsible className="w-full">
                    {navConfig.map((navItem, index) => (
                      <AccordionItem 
                        key={navItem.label} 
                        value={`item-${index}`}
                        className="border-b-0"
                      >
                        <AccordionTrigger 
                          className={cn(
                            "px-6 py-3 text-base font-medium hover:no-underline",
                            "text-foreground hover:text-[#4F26B7]",
                            "[&[data-state=open]]:text-[#4F26B7]",
                            "[&>svg]:h-4 [&>svg]:w-4 [&>svg]:transition-transform [&>svg]:duration-150"
                          )}
                        >
                          {navItem.label}
                        </AccordionTrigger>
                        <AccordionContent className="pb-2">
                          <div className="flex flex-col">
                            {navItem.items.map((item, itemIndex) => {
                              const IconComponent = item.icon;
                              return (
                                <a
                                  key={itemIndex}
                                  href={item.href}
                                  className={cn(
                                    "flex items-center gap-3 px-8 py-3 text-sm transition-colors",
                                    "text-muted-foreground hover:text-[#4F26B7] hover:bg-accent/50"
                                  )}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <IconComponent className="h-4 w-4 flex-shrink-0" />
                                  <span>{item.label}</span>
                                </a>
                              );
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
