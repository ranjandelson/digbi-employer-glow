import { MapPin } from "lucide-react";

// Custom filled social icons matching brand style
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
  </svg>
);

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
      icon: LinkedInIcon,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@digbihealth8695",
      icon: YouTubeIcon,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/digbihealth/",
      icon: FacebookIcon,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/digbihealth/",
      icon: InstagramIcon,
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
    <footer className="bg-[#fafafa] text-foreground" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Brand, Address & Social */}
          <div className="space-y-6">
            {/* Logo */}
            <a 
              href="https://digbihealth.ai/" 
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
