import { useEffect, useRef } from "react";
import type { Icon as TablerIcon } from "@tabler/icons-react";
import {
  IconBeach,
  IconBox,
  IconBriefcase2,
  IconBuildingCommunity,
  IconBulb,
  IconCalendarDollar,
  IconCalendarTime,
  IconChecklist,
  IconFileTime,
  IconLayoutDashboard,
} from "@tabler/icons-react";
import {
  Box,
  Stack,
  UnstyledButton,
  useComputedColorScheme,
} from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import classes from "./Sidebar.module.css";

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
      className={`${classes.button} ${expanded ? classes.buttonExpanded : ""}`}
      data-active={active || undefined}
    >
      {expanded ? (
        <Box className={classes.labelRow}>
          <IconComponent size={20} stroke={1.5} className={classes.icon} />
          <span className={classes.label}>{label}</span>
        </Box>
      ) : (
        <IconComponent size={20} stroke={1.5} className={classes.icon} />
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
    <Link to={link.to} key={link.label} className={classes.navLink}>
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
      className={`${classes.sidebar} ${expanded ? classes.expanded : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Box className={classes.logoContainer}>
        {expanded ? (
          <img
            src={expandedLogoSrc}
            className={classes.expandedLogo}
            alt="Inexture logo"
          />
        ) : (
          <img
            src="/1_favicon.svg"
            className={classes.collapsedLogo}
            alt="Inexture logo"
          />
        )}
      </Box>

      <Box component="nav" aria-label="Main navigation" className={classes.nav}>
        <Stack gap={0}>{links}</Stack>
      </Box>
    </Box>
  );
}

export default Sidebar;
