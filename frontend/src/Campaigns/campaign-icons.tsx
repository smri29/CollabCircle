import { BrainCircuit, BriefcaseBusiness, FlaskConical, ShieldCheck } from "lucide-react";
import type { CampaignModule } from "./campaign-data";

export function CampaignModuleIcon({ type }: { type: CampaignModule["icon"] }) {
  const Icon = { shield: ShieldCheck, ai: BrainCircuit, research: FlaskConical, careers: BriefcaseBusiness }[type];
  return <Icon aria-hidden="true" size={24} strokeWidth={1.7} />;
}
