export type Attorney = {
  id: string;
  name: string;
  title: string;
  image: string;
  practiceAreas: string[];
  experience: string;
  education: string[];
  barAdmissions: string[];
  bio: string;
  representativeMatters: string[];
};

export const attorneys: Attorney[] = [
  {
    id: "eleanor-veyron",
    name: "Eleanor Veyron",
    title: "Managing Partner",
    image: "/images/attorney-1.jpg",
    practiceAreas: ["Corporate Law", "Mergers & Acquisitions"],
    experience: "18+ years",
    education: [
      "J.D., Yale Law School",
      "B.A., Georgetown University",
    ],
    barAdmissions: [
      "New York State Bar",
      "District of Columbia Bar",
    ],
    bio: "Eleanor Veyron co-founded the firm with a clear mission: deliver sophisticated corporate counsel without the inefficiency of large institutional firms. She advises boards, founders, and investors on high-stakes transactions, governance structures, and strategic business decisions. Her practice spans domestic and cross-border M&A, venture-backed growth, and complex corporate restructurings.",
    representativeMatters: [
      "Led $420M acquisition of a SaaS platform for a Fortune 500 acquirer",
      "StructuredSeries C financing for a healthcare technology startup",
      "Advised on corporate governance reform for a publicly traded company",
      "Negotiated cross-border joint venture between U.S. and European firms",
    ],
  },
  {
    id: "marcus-cole",
    name: "Marcus Cole",
    title: "Partner",
    image: "/images/attorney-2.jpg",
    practiceAreas: ["Compliance & Risk", "Corporate Law"],
    experience: "15+ years",
    education: [
      "J.D., Columbia Law School",
      "M.P.P., Harvard Kennedy School",
      "B.A., Amherst College",
    ],
    barAdmissions: [
      "New York State Bar",
      "England & Wales (Solicitor)",
    ],
    bio: "Marcus Cole brings a dual perspective in law and public policy to the firm's compliance and risk practice. He helps clients navigate complex regulatory environments, design effective compliance programs, and respond to government investigations. His work spans anti-corruption, data privacy, and financial regulations across multiple jurisdictions.",
    representativeMatters: [
      "Designed global anti-corruption compliance program for a multinational corporation",
      "Led internal investigation following SEC inquiry into financial reporting",
      "Advised fintech company through multi-state licensing process",
      "Resolved regulatory enforcement action with zero penalties for client",
    ],
  },
  {
    id: "amara-bennett",
    name: "Amara Bennett",
    title: "Senior Counsel",
    image: "/images/attorney-3.jpg",
    practiceAreas: ["Employment Law"],
    experience: "12+ years",
    education: [
      "J.D., Stanford Law School",
      "B.S., University of Pennsylvania",
    ],
    barAdmissions: [
      "California State Bar",
      "New York State Bar",
    ],
    bio: "Amara Bennett represents employers in all aspects of the employment relationship, from hiring through separation. She drafts employment agreements, leads workplace investigations, and defends clients in employment litigation. Her approach focuses on prevention and practical solutions that align with business operations.",
    representativeMatters: [
      "Conducted workplace investigation for a 500-person technology company",
      "Drafted comprehensive employment handbook for a multi-state employer",
      "Defended executive termination claim resulting in favorable settlement",
      "Advised on post-acquisition workforce restructuring for 200+ employees",
    ],
  },
  {
    id: "julian-hart",
    name: "Julian Hart",
    title: "Counsel",
    image: "/images/attorney-4.jpg",
    practiceAreas: ["Intellectual Property"],
    experience: "10+ years",
    education: [
      "J.D., NYU School of Law",
      "B.S. Computer Science, MIT",
    ],
    barAdmissions: [
      "New York State Bar",
      "U.S. Patent and Trademark Office",
    ],
    bio: "Julian Hart combines technical expertise with legal acumen to protect clients' most valuable intellectual property assets. With a background in computer science, he understands the technology he protects. His practice covers trademark, copyright, trade secrets, and IP licensing for companies ranging from early-stage startups to established enterprises.",
    representativeMatters: [
      "Secured broad trademark protection for a consumer electronics brand",
      "Negotiated IP licensing agreement generating $12M in annual royalties",
      "Successfully enforced trade secret claims in federal court",
      "Built comprehensive IP portfolio strategy for an AI startup",
    ],
  },
];
