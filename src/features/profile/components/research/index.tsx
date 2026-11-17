import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { RESEARCH } from "../../data/research";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ResearchItem } from "./research-item";

export function Research() {
  return (
    <Panel id="research">
      <PanelHeader>
        <PanelTitle>
          Research
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({RESEARCH.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          Independent technical reports on AI agent reliability, security and
          privacy. Each comes with open code, synthetic data and a one-command
          reproduction.
        </p>
      </div>

      <div>
        {RESEARCH.map((paper, index) => (
          <ResearchItem
            key={paper.slug}
            paper={paper}
            defaultOpen={index === 0}
            className="border-b border-edge last:border-b-0"
          />
        ))}
      </div>

      <div className="screen-line-before flex justify-center py-2">
        <Button variant="default" asChild>
          <Link href="/research">
            All Research
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </Panel>
  );
}
