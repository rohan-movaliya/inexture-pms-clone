import type { Icon } from "@tabler/icons-react";
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
import { Box, Stack, UnstyledButton } from "@mantine/core";
import styles from "./Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";

interface NavbarLinkProps {
  icon: Icon;
  label: string;
  active?: boolean;
  expanded: boolean;
  onClick?: () => void;
}

interface SidebarProps {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

function NavbarLink({
  icon: Icon,
  label,
  active,
  onClick,
  expanded,
}: NavbarLinkProps) {
  return (
    <UnstyledButton
      onClick={onClick}
      className={`${styles.link} ${expanded ? styles.expanded : ""}`}
      data-active={active || undefined}
    >
      {expanded ? (
        <Box className={styles.expandedLabel}>
          <Icon size={20} stroke={1.5} className={styles.icon} />
          <span className={styles.label}>{label}</span>
        </Box>
      ) : (
        <Icon size={20} stroke={1.5} className={styles.icon} />
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

  const links = mockdata.map((link) => (
    <Link to={link.to} key={link.label} style={{ textDecoration: "none" }}>
      <NavbarLink
        {...link}
        active={location.pathname === link.to}
        expanded={expanded}
      />
    </Link>
  ));

  return (
    <Box
      className={`${styles.navbar} ${expanded ? styles.expanded : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <Box className={styles.logoContainer}>
        {expanded ? (
          <img src="/logo_dark.png" className={styles.expanded_logo} />
        ) : (
          <img src="/logo.svg" className={styles.logo} />
        )}
      </Box>

      <Box className={styles.linksContainer}>
        <Stack gap={0}>{links}</Stack>
      </Box>
    </Box>
  );
}

export default Sidebar;




