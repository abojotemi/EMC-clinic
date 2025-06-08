import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconType } from "react-icons";
export function NavItem(props: { icon: IconType; label: string; url: string }) {
  const { state, isMobile } = useSidebar();

  return (
    <SidebarMenuButton
      asChild
      tooltip={{
        children: props.label,
        sideOffset: 20,
      }}
      className={cn(
        "mx-auto hover:bg-transparent",
        state === "collapsed" && !isMobile ? "justify-center" : "justify-start"
      )}
      data-slot="sidebar-menu-button"
    >
      <Link href={props.url}>
        <props.icon
          className={`${state === "collapsed" ? "!h-8 !w-8" : "h-4 w-4"}`}
        />
        <span className={cn("font-extrabold tracking-wider text-lg",state === "collapsed" && !isMobile && "hidden")}>
          {props.label}
        </span>
      </Link>
    </SidebarMenuButton>
  );
}
