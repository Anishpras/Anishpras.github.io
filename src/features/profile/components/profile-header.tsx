import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        {/* Flag of Viet Nam */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          id="flag-icons-in"
          viewBox="0 0 30 20"
          className="absolute top-0 -left-px h-8 sm:h-9"
        >
          <path fill="#f93" d="M0 0h30v6.67H0z" />
          <path fill="#fff" d="M0 6.67h30v6.66H0z" />
          <path fill="#128807" d="M0 13.33h30v6.67H0z" />
          <g transform="matrix(0.15 0 0 0.15 15 10)">
            <circle r="20" fill="#008" />
            <circle r="17.5" fill="#fff" />
            <circle r="3.5" fill="#008" />
            <g id="in-d">
              <g id="in-c">
                <g id="in-b">
                  <g id="in-a" fill="#008">
                    <circle r=".9" transform="rotate(7.5 -8.8 133.5)" />
                    <path d="M0 17.5.6 7 0 2l-.6 5z" />
                  </g>
                  <use
                    xlinkHref="#in-a"
                    width="100%"
                    height="100%"
                    transform="rotate(15)"
                  />
                </g>
                <use
                  xlinkHref="#in-b"
                  width="100%"
                  height="100%"
                  transform="rotate(30)"
                />
              </g>
              <use
                xlinkHref="#in-c"
                width="100%"
                height="100%"
                transform="rotate(60)"
              />
            </g>
            <use
              xlinkHref="#in-d"
              width="100%"
              height="100%"
              transform="rotate(120)"
            />
            <use
              xlinkHref="#in-d"
              width="100%"
              height="100%"
              transform="rotate(-120)"
            />
          </g>
        </svg>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56 sm:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-600">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info" />
            </SimpleTooltip>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
