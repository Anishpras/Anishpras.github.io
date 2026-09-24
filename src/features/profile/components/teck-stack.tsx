import Image from "next/image";
import React from "react";

import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const TOOL_GROUPS = [
  {
    label: "Languages",
    tools: ["TypeScript", "JavaScript", "Python", "Rust", "Solidity", "SQL"],
  },
  {
    label: "Web & APIs",
    tools: [
      "React",
      "Next.js",
      "Node.js",
      "Fastify",
      "Express",
      "NestJS",
      "Hono",
      "tRPC",
      "GraphQL",
      "REST",
      "OpenAPI",
    ],
  },
  {
    label: "AI & voice",
    tools: [
      "LLM applications",
      "RAG",
      "AI agents",
      "MCP",
      "STT / TTS",
      "Twilio",
      "LiveKit",
      "Vocode",
    ],
  },
  {
    label: "Data & infrastructure",
    tools: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Prisma",
      "Drizzle",
      "AWS",
      "Docker",
      "CI/CD",
    ],
  },
] as const;

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack & tools</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                  >
                    {tech.theme ? (
                      <>
                        <Image
                          src={`/tech-stack/${tech.key}-light.svg`}
                          alt={`${tech.title} light icon`}
                          width={32}
                          height={32}
                          className="hidden [html.light_&]:block"
                          unoptimized
                        />
                        <Image
                          src={`/tech-stack/${tech.key}-dark.svg`}
                          alt={`${tech.title} dark icon`}
                          width={32}
                          height={32}
                          className="hidden [html.dark_&]:block"
                          unoptimized
                        />
                      </>
                    ) : (
                      <Image
                        src={`/tech-stack/${tech.key}.svg`}
                        alt={`${tech.title} icon`}
                        width={32}
                        height={32}
                        unoptimized
                      />
                    )}
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 space-y-4 border-t border-edge pt-5">
          {TOOL_GROUPS.map((group) => (
            <div
              key={group.label}
              className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:items-start"
            >
              <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                {group.label}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {group.tools.map((tool) => (
                  <li key={tool}>
                    <Tag>{tool}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}
