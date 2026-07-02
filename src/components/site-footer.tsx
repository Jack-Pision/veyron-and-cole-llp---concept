import Link from "next/link";

const footerLinks = {
  practice: [
    { href: "/practice?area=corporate-law", label: "Corporate Law" },
    { href: "/practice?area=mergers-acquisitions", label: "Mergers & Acquisitions" },
    { href: "/practice?area=contract-drafting", label: "Contract Drafting" },
    { href: "/practice?area=employment-law", label: "Employment Law" },
    { href: "/practice?area=intellectual-property", label: "Intellectual Property" },
    { href: "/practice?area=compliance-risk", label: "Compliance & Risk" },
  ],
  company: [
    { href: "/team", label: "Our Team" },
    { href: "/portal", label: "Client Portal" },
    { href: "/#consultation", label: "Contact Us" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-t-[0.5px] border-border-custom bg-navy py-16 text-white">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="px-6 sm:px-8 lg:px-12">
          <span className="text-body font-semibold">
            Veyron & Cole LLP
          </span>
          <p className="mt-3 max-w-xs text-body text-white/60">
            Corporate counsel for decisive companies. Advising founders,
            boards, investors, and executive teams.
          </p>
        </div>
        <div className="px-6 sm:px-8 lg:px-12">
          <h4 className="mb-3 text-caption font-semibold uppercase tracking-widest text-gold">
            Practice Areas
          </h4>
          <ul className="space-y-2">
            {footerLinks.practice.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-body text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-6 sm:px-8 lg:px-12">
          <h4 className="mb-3 text-caption font-semibold uppercase tracking-widest text-gold">
            Firm
          </h4>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-body text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-1 text-body text-white/60">
            <p>New York, NY</p>
            <p>contact@veyroncole.com</p>
            <p>(212) 555-0180</p>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-t-[0.5px] border-white/10 px-6 pt-8 sm:px-8 lg:px-12">
        <p className="text-caption text-white/40">
          Submitting information through this website does not create an
          attorney-client relationship. Do not send confidential information
          until an attorney-client relationship has been established.
        </p>
      </div>
    </footer>
  );
}
