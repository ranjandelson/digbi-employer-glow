import { MapPin, Linkedin, Youtube, Facebook, Instagram } from "lucide-react";

// Footer configuration - easily update links and content here
const footerConfig = {
  address: {
    line1: "800 El Camino Real West, Suite 180",
    line2: "Mountain View, CA, United States, 94040",
  },
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/digbihealth/",
      icon: Linkedin,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@digbihealth8695",
      icon: Youtube,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/digbihealth/",
      icon: Facebook,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/digbihealth/",
      icon: Instagram,
    },
  ],
  columns: {
    partner: {
      title: "Partner",
      links: [
        { label: "Employers & Payers", href: "https://digbihealth.com/pages/partner" },
        { label: "Health Care Providers", href: "https://digbihealth.com/pages/health-care-providers" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { label: "Humans of Digbi", href: "https://digbihealth.com/blogs/humans-of-digbi" },
        { label: "Member Reviews", href: "https://digbihealth.com/pages/reviews" },
        { label: "Blog: Pharma & Science", href: "https://digbihealth.com/blogs/science-talk" },
        { label: "Published Research", href: "https://digbihealth.com/blogs/published-research" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { label: "About Us", href: "https://digbihealth.com/pages/about-us" },
        { label: "Press Releases", href: "https://digbihealth.com/blogs/press-release" },
        { label: "Careers", href: "https://digbihealth.com/a/careers" },
        { label: "Events", href: "https://digbihealth.com/pages/digbi-live" },
        { label: "Help", href: "https://digbihealth.com/pages/help" },
        { label: "Contact Us", href: "mailto:digbi@digbihealth.com" },
      ],
    },
  },
  legal: [
    { label: "Cookie Preferences", href: "https://cdn.shopify.com/s/files/1/2078/0145/files/Cookie_Policy_-_Digbi_Health.pdf?v=1686228768" },
    { label: "Privacy", href: "https://digbihealth.com/pages/privacy-and-accuracy" },
    { label: "Terms", href: "https://digbihealth.com/pages/terms-conditions" },
  ],
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  isEmail?: boolean;
}

const FooterLink = ({ href, children, isEmail = false }: FooterLinkProps) => (
  <a
    href={href}
    className="text-muted-foreground hover:text-primary focus:text-primary transition-colors duration-150 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-foreground rounded-sm"
    {...(!isEmail && { target: "_blank", rel: "noopener noreferrer" })}
  >
    {children}
  </a>
);

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <nav aria-labelledby={`footer-${title.toLowerCase().replace(/\s+/g, "-")}`}>
    <h3
      id={`footer-${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide"
    >
      {title}
    </h3>
    <ul className="space-y-3" role="list">
      {links.map((link) => (
        <li key={link.label}>
          <FooterLink href={link.href} isEmail={link.href.startsWith("mailto:")}>
            {link.label}
          </FooterLink>
        </li>
      ))}
    </ul>
  </nav>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#d2d2d5] text-foreground" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Brand, Address & Social */}
          <div className="space-y-6">
            {/* Logo */}
            <a 
              href="/" 
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-foreground rounded-sm"
              aria-label="Digbi Health Home"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/2078/0145/files/digbi_logo.svg"
                alt="Digbi Health"
                className="h-10 w-auto"
              />
            </a>

            {/* Address */}
            <address className="not-italic">
              <div className="flex items-start gap-3 group">
                <MapPin 
                  className="h-5 w-5 mt-0.5 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors duration-150" 
                  aria-hidden="true"
                />
                <div className="text-sm text-muted-foreground leading-relaxed">
                  <p>{footerConfig.address.line1}</p>
                  <p>{footerConfig.address.line2}</p>
                </div>
              </div>
            </address>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {footerConfig.social.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Digbi Health on ${social.label}`}
                    className="text-muted-foreground hover:text-primary focus:text-primary transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-foreground rounded-sm p-1"
                  >
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Partner */}
          <FooterColumn
            title={footerConfig.columns.partner.title}
            links={footerConfig.columns.partner.links}
          />

          {/* Column 3 - Resources */}
          <FooterColumn
            title={footerConfig.columns.resources.title}
            links={footerConfig.columns.resources.links}
          />

          {/* Column 4 - Company */}
          <FooterColumn
            title={footerConfig.columns.company.title}
            links={footerConfig.columns.company.links}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © Digbi Health {currentYear}. All rights reserved.
            </p>

            {/* Legal Links */}
            <nav aria-label="Legal links">
              <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6" role="list">
                {footerConfig.legal.map((link, index) => (
                  <li key={link.label} className="flex items-center gap-4 md:gap-6">
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                    {index < footerConfig.legal.length - 1 && (
                      <span className="hidden md:inline text-muted-foreground/50" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
