import { Nav } from "@/components/nav";
import type { NavItem } from "@/types/nav";

export function DesktopNav({
  items,
  pathname,
}: {
  items: NavItem[];
  pathname: string;
}) {
  return <Nav className="max-sm:hidden" items={items} activeId={pathname} />;
}
