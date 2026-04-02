import { useEffect, useRef } from "react";
import type { Icon as TablerIcon } from "@tabler/icons-react";
import {
  IconChecklist,
  IconLayoutDashboard,
  IconBriefcase2,
  IconCalendarTime,
  IconCalendarDollar,
  IconBuildingCommunity,
  IconFileTime,
  IconBox,
  IconBeach,
  IconBulb,
} from "@tabler/icons-react";
import { Box, Stack, UnstyledButton, useComputedColorScheme } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  expanded: boolean;
  onClick?: () => void;
}

interface SidebarProps {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

function isNavActive(pathname: string, to: string): boolean {
  if (to === "/") {
    return pathname === "/";
  }
  return pathname === to || pathname.startsWith(`${to}/`);
}

function NavbarLink({
  icon: IconComponent,
  label,
  active,
  onClick,
  expanded,
}: NavbarLinkProps) {
  return (
    <UnstyledButton
      onClick={onClick}
      className={`mt-0 flex h-12 items-center justify-center rounded-md text-[var(--sidebar-fg)] transition-colors ${
        expanded ? "w-[280px]" : "w-[50px]"
      } ${
        active
          ? "bg-blue-500 text-blue-50 shadow-sm hover:bg-blue-500"
          : "hover:bg-[var(--sidebar-link-hover)]"
      }`}
      data-active={active || undefined}
    >
      {expanded ? (
        <Box className="flex w-full items-center gap-2 px-5 py-1 text-left">
          <IconComponent size={20} stroke={1.5} className="h-[30px] w-[30px]" />
          <span className="ml-1 flex items-center">{label}</span>
        </Box>
      ) : (
        <IconComponent size={20} stroke={1.5} className="h-[30px] w-[30px]" />
      )}
    </UnstyledButton>
  );
}

const mockdata = [
  { icon: IconLayoutDashboard, label: "Dashboard", to: "/" },
  { icon: IconChecklist, label: "Daily Tasks", to: "/daily-tasks" },
  { icon: IconBriefcase2, label: "Projects", to: "/projects" },
  { icon: IconCalendarTime, label: "Leaves", to: "/leaves" },
  { icon: IconCalendarDollar, label: "Leave Compensation", to: "/leave-comp" },
  { icon: IconBuildingCommunity, label: "Work From Home", to: "/wfh" },
  { icon: IconFileTime, label: "Time Entry", to: "/time-entry" },
  { icon: IconBox, label: "Venue Booking", to: "/venue-booking" },
  { icon: IconBeach, label: "Holiday", to: "/holiday" },
  { icon: IconBulb, label: "Policies", to: "/policies" },
];

function Sidebar({ expanded, setExpanded }: SidebarProps) {
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const colorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });
  const expandedLogoSrc =
    colorScheme === "light" ? "/3_logo_light.png" : "/2_logo_dark.png";

  useEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;

    const open = () => setExpanded(true);
    const onFocusOut = (e: FocusEvent) => {
      const next = e.relatedTarget as Node | null;
      if (next && el.contains(next)) return;
      setExpanded(false);
    };

    el.addEventListener("focusin", open);
    el.addEventListener("focusout", onFocusOut);
    return () => {
      el.removeEventListener("focusin", open);
      el.removeEventListener("focusout", onFocusOut);
    };
  }, [setExpanded]);

  const handleMouseLeave = () => {
    const root = sidebarRef.current;
    if (root?.contains(document.activeElement)) return;
    setExpanded(false);
  };

  const links = mockdata.map((link) => (
    <Link
      to={link.to}
      key={link.label}
      className="rounded-md text-inherit no-underline outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sidebar-surface)]"
    >
      <NavbarLink
        {...link}
        active={isNavActive(location.pathname, link.to)}
        expanded={expanded}
      />
    </Link>
  ));

  return (
    <Box
      ref={sidebarRef}
      className={`fixed left-0 top-0 z-[400] flex h-full flex-col border-r border-[var(--sidebar-border)] bg-[var(--sidebar-surface)] transition-[width] duration-200 ${
        expanded ? "w-[300px]" : "w-[80px]"
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Box className="flex h-[70px] w-full items-center justify-center border-b border-[var(--sidebar-border)]">
        {expanded ? (
          <img
            src={expandedLogoSrc}
            className="h-[70px] w-[250px] object-contain"
            alt="Inexture logo"
          />
        ) : (
          <img
            src="/1_favicon.svg"
            className="h-[70px] w-[45px] object-contain"
            alt="Inexture logo"
          />
        )}
      </Box>

      <Box
        component="nav"
        aria-label="Main navigation"
        className="mt-5 flex w-full justify-center"
      >
        <Stack gap={0}>{links}</Stack>
      </Box>
    </Box>
  );
}

export default Sidebar;
