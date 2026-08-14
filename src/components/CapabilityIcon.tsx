import type { ReactElement } from "react";

type Props = { name: string };

const paths: Record<string, ReactElement> = {
  app: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="10" y1="18" x2="14" y2="18" />
    </>
  ),
  website: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="18" x2="12" y2="21" />
    </>
  ),
  crm: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  chatbot: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </>
  ),
  ai: <path d="M12 2l3 6 6 1-4.5 4.3L17.5 20 12 17l-5.5 3 1-6.7L3 9l6-1 3-6z" />,
  fintech: <path d="M3 12h4l3-9 4 18 3-9h4" />,
  edtech: (
    <>
      <path d="M2 9l10-5 10 5-10 5-10-5z" />
      <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
    </>
  ),
  enterprise: (
    <>
      <path d="M12 21c4-4 8-7.58 8-12A8 8 0 0 0 4 9c0 4.42 4 8 8 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
};

export default function CapabilityIcon({ name }: Props) {
  return (
    <svg className="cap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      {paths[name] ?? null}
    </svg>
  );
}
