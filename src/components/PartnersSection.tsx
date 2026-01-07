import { Handshake } from "lucide-react";

import soleraLogo from "@/assets/partners/solera.png";
import dexcomLogo from "@/assets/partners/dexcom.svg";
import novoNordiskLogo from "@/assets/partners/novo-nordisk.png";
import labcorpLogo from "@/assets/partners/labcorp.png";
import accelLogo from "@/assets/partners/accel.svg";
import personifyHealthLogo from "@/assets/partners/personify-health.svg";
import htaLogo from "@/assets/partners/hta.png";
import northwellLogo from "@/assets/partners/northwell.png";
import wvuLogo from "@/assets/partners/wvu.png";
import lifegroupsLogo from "@/assets/partners/lifegroups.png";

const partners = [
  { name: "LabCorp", logo: labcorpLogo },
  { name: "Personify Health", logo: personifyHealthLogo },
  { name: "Novo Nordisk", logo: novoNordiskLogo },
  { name: "Health Transformation Alliance", logo: htaLogo },
  { name: "Northwell Health", logo: northwellLogo },
  { name: "West Virginia University", logo: wvuLogo },
  { name: "LifeGroups", logo: lifegroupsLogo },
  { name: "Dexcom", logo: dexcomLogo },
  { name: "Solera", logo: soleraLogo },
  { name: "Accel", logo: accelLogo },
];

const PartnersSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Handshake className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted Partnerships</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Partners who believe in our mission
          </h2>
        </div>

        {/* Logo Grid - First Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center max-w-5xl mx-auto">
          {partners.slice(0, 5).map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 lg:max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Logo Grid - Second Row (Centered) */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 items-center max-w-5xl mx-auto mt-8">
          {partners.slice(5).map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 lg:max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
