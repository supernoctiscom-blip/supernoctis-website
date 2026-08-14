export type Product = {
  tag: string;
  name: string;
  description: string;
  glow: string;
  edge: string;
};

export const products: Product[] = [
  {
    tag: "Consumer · Mobile",
    name: "Fluencyo AI",
    description:
      "A gamified, AI-powered language learning app that makes fluency feel like a game, not homework.",
    glow: "rgba(139,127,255,.20)",
    edge: "var(--violet)",
  },
  {
    tag: "AI · Conversational",
    name: "Aira",
    description:
      "An AI chatbot built for real conversations — support, sales and assistant workflows in one engine.",
    glow: "rgba(94,234,212,.20)",
    edge: "var(--cyan)",
  },
  {
    tag: "Fintech",
    name: "Credli",
    description:
      "A finance app bringing credit and lending to underbanked and gig workers, built to stand on its own.",
    glow: "rgba(255,184,107,.18)",
    edge: "var(--gold)",
  },
];

export type ProcessStep = {
  num: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { num: "01", title: "Brief", description: "You tell us what you're building and why, through the form below." },
  { num: "02", title: "Discovery call", description: "A short Google Meet to understand scope, constraints and timeline." },
  { num: "03", title: "Scope & quote", description: "You get a clear quotation — what's built, by when, and for how much." },
  { num: "04", title: "Build", description: "Sprints with regular demos, not a black box until launch day." },
  { num: "05", title: "Launch & support", description: "We ship it, then stay on to fix, extend and iterate with you." },
];

export type EnterpriseRow = { label: string; detail: string };

export const enterpriseRows: EnterpriseRow[] = [
  { label: "Businesses", detail: "CRMs, internal tools, AI copilots" },
  { label: "Educational institutions", detail: "EdTech platforms, learning tools" },
  { label: "Fintech & lending", detail: "Credit infrastructure, compliance-ready builds" },
  { label: "Research & product teams", detail: "Custom LLMs, RAG, model infrastructure" },
];

export const projectTypeOptions: string[] = [
  "Mobile App",
  "Website",
  "AI Chatbot",
  "Custom AI / LLM",
  "CRM / Internal Tool",
  "Fintech Product",
  "EdTech Product",
  "Other",
];
