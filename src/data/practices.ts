export type PracticeArea = {
  id: string;
  title: string;
  summary: string;
  services: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
  icon: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "corporate-law",
    title: "Corporate Law",
    summary:
      "Comprehensive corporate governance, entity formation, and strategic advisory for companies at every stage.",
    services: [
      "Entity formation and structuring",
      "Corporate governance advisory",
      "Shareholder agreements",
      "Board resolutions and compliance",
      "Regulatory filings",
    ],
    industries: [
      "Technology",
      "Healthcare",
      "Financial Services",
      "Real Estate",
      "Energy",
    ],
    faqs: [
      {
        question: "When should I form a corporation versus an LLC?",
        answer:
          "The choice depends on your growth plans, tax strategy, and investor expectations. We evaluate your specific circumstances and recommend the structure that best supports your business objectives.",
      },
      {
        question: "How do you approach corporate governance?",
        answer:
          "We build governance frameworks that scale with your company, establishing clear policies, board procedures, and compliance systems that satisfy legal requirements while supporting operational efficiency.",
      },
    ],
    icon: "Building2",
  },
  {
    id: "mergers-acquisitions",
    title: "Mergers & Acquisitions",
    summary:
      "End-to-end M&A transaction support from due diligence through closing, protecting your interests at every stage.",
    services: [
      "Due diligence management",
      "Transaction structuring",
      "Negotiation and documentation",
      "Regulatory approval coordination",
      "Post-merger integration advisory",
    ],
    industries: [
      "Technology",
      "Manufacturing",
      "Healthcare",
      "Professional Services",
    ],
    faqs: [
      {
        question: "How long does a typical acquisition take?",
        answer:
          "Timelines vary based on complexity and regulatory requirements. A straightforward acquisition typically runs 3-6 months, while complex transactions with multiple approvals may take longer.",
      },
      {
        question: "What are the biggest risks in M&A transactions?",
        answer:
          "Key risks include undisclosed liabilities, integration challenges, regulatory obstacles, and cultural misalignment. Our due diligence process systematically identifies and mitigates these risks.",
      },
    ],
    icon: "Handshake",
  },
  {
    id: "contract-drafting",
    title: "Contract Drafting",
    summary:
      "Precise, enforceable agreements tailored to your commercial objectives and risk tolerance.",
    services: [
      "Commercial agreements",
      "Vendor and supplier contracts",
      "Technology licensing",
      "Partnership and joint venture agreements",
      "Non-disclosure and non-compete agreements",
    ],
    industries: [
      "Technology",
      "E-Commerce",
      "Media",
      "Professional Services",
      "Manufacturing",
    ],
    faqs: [
      {
        question: "How do you ensure contracts protect our interests?",
        answer:
          "We draft with precision, defining clear obligations, remedies, and exit mechanisms. Every clause serves a purpose, and we pressure-test agreements against potential disputes and scenarios.",
      },
      {
        question: "Can you review contracts drafted by other firms?",
        answer:
          "Absolutely. We regularly review, redline, and negotiate agreements prepared by opposing counsel, identifying risks and securing more favorable terms for our clients.",
      },
    ],
    icon: "FileText",
  },
  {
    id: "employment-law",
    title: "Employment Law",
    summary:
      "Strategic employment counsel balancing organizational goals with employee relations and regulatory compliance.",
    services: [
      "Employment agreements and policies",
      "Executive compensation",
      "Workplace investigations",
      "Disciplinary and termination advisory",
      "Employee handbook development",
    ],
    industries: [
      "Technology",
      "Healthcare",
      "Financial Services",
      "Retail",
      "Nonprofit",
    ],
    faqs: [
      {
        question: "Do we need an employee handbook?",
        answer:
          "A well-crafted handbook sets expectations, protects your organization, and ensures consistent treatment of employees. We draft handbooks tailored to your size, industry, and jurisdiction.",
      },
      {
        question: "How do you handle workplace investigations?",
        answer:
          "We conduct thorough, impartial investigations with complete discretion, documenting findings and providing actionable recommendations to resolve issues and minimize liability.",
      },
    ],
    icon: "Users",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    summary:
      "Protect, monetize, and enforce your intellectual property assets across all channels.",
    services: [
      "Trademark registration and enforcement",
      "Copyright protection",
      "Trade secret strategy",
      "IP licensing agreements",
      "IP portfolio management",
    ],
    industries: [
      "Technology",
      "Media & Entertainment",
      "Fashion",
      "Software",
      "Consumer Products",
    ],
    faqs: [
      {
        question: "When should we file for trademark protection?",
        answer:
          "File as early as possible once you have a brand identity. Early registration strengthens your position against infringers and prevents costly rebranding efforts.",
      },
      {
        question: "How do we protect trade secrets?",
        answer:
          "Protection requires a combination of legal agreements, security measures, and internal policies. We build comprehensive trade secret programs that establish and maintain your competitive advantage.",
      },
    ],
    icon: "Shield",
  },
  {
    id: "compliance-risk",
    title: "Compliance & Risk",
    summary:
      "Proactive compliance frameworks and risk management strategies that prevent issues before they arise.",
    services: [
      "Regulatory compliance programs",
      "Risk assessments",
      "Internal investigations",
      "Anti-corruption compliance",
      "Data privacy compliance",
    ],
    industries: [
      "Financial Services",
      "Healthcare",
      "Technology",
      "Energy",
      "International Trade",
    ],
    faqs: [
      {
        question: "How do we know if our compliance program is adequate?",
        answer:
          "We conduct gap analyses against regulatory requirements and industry benchmarks, identifying weaknesses and recommending improvements that demonstrate good-faith compliance efforts.",
      },
      {
        question: "What triggers a compliance investigation?",
        answer:
          "Investigations are triggered by whistleblower reports, audit findings, regulatory inquiries, or internal concerns. We respond quickly and thoroughly, protecting both the organization and individual rights.",
      },
    ],
    icon: "ClipboardCheck",
  },
];
