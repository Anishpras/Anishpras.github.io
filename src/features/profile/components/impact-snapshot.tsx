import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const IMPACT = [
  {
    value: "5+",
    label: "years shipping",
    detail: "AI, SaaS, voice, and secure systems",
  },
  {
    value: "84%+",
    label: "cost reduction",
    detail: "Assistable platform operating cost",
  },
  {
    value: "14",
    label: "engineers guided",
    detail: "team leadership at XAMTAC",
  },
  {
    value: "40M+",
    label: "AI conversations",
    detail: "platform scale at Assistable",
  },
] as const;

export function ImpactSnapshot() {
  return (
    <Panel id="impact">
      <PanelHeader>
        <PanelTitle>Selected outcomes</PanelTitle>
      </PanelHeader>

      <PanelContent className="grid grid-cols-2 gap-px bg-edge p-0 sm:grid-cols-4">
        {IMPACT.map((item) => (
          <div key={item.label} className="bg-background px-4 py-5 sm:min-h-32">
            <p className="font-mono text-2xl font-semibold tracking-tight">
              {item.value}
            </p>
            <p className="mt-1 text-sm font-medium">{item.label}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {item.detail}
            </p>
          </div>
        ))}
      </PanelContent>
    </Panel>
  );
}
