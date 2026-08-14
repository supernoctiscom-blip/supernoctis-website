export type Capability = {
  title: string;
  description: string;
  icon: string; // path data or key used by CapabilityIcon
};

export const capabilities: Capability[] = [
  {
    title: "Mobile & Web Apps",
    description: "iOS, Android and web products — from first wireframe to app store.",
    icon: "app",
  },
  {
    title: "Marketing & Product Websites",
    description: "Fast, distinctive sites built to convert — not another template.",
    icon: "website",
  },
  {
    title: "CRMs & Internal Tools",
    description: "Ops dashboards, pipelines and admin panels your team will actually use.",
    icon: "crm",
  },
  {
    title: "AI Chatbots & Assistants",
    description: "Support, sales and internal copilots trained on your data.",
    icon: "chatbot",
  },
  {
    title: "Custom AI & LLM Models",
    description: "Fine-tuning, RAG pipelines and model infrastructure, built for your use case.",
    icon: "ai",
  },
  {
    title: "Fintech Systems",
    description: "Credit, payments and lending infrastructure that survives an audit.",
    icon: "fintech",
  },
  {
    title: "EdTech Platforms",
    description: "Learning products for institutions and consumer edtech alike.",
    icon: "edtech",
  },
  {
    title: "Enterprise & B2B Solutions",
    description: "Custom platforms scoped around how a real organization actually works.",
    icon: "enterprise",
  },
];
