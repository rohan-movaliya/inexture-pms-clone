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
      className={`mt-0 flex h-12 items-center justify-center rounded-md text-white transition-colors ${
        expanded ? "w-[280px]" : "w-[50px]"
      } ${
        active
          ? "bg-blue-500 text-blue-50 shadow-sm hover:bg-blue-500"
          : "hover:bg-zinc-900"
      }`}
      data-active={active || undefined}
    >
      {expanded ? (
        <Box className="flex w-[289px] items-center gap-2 px-5 py-1 text-left">
          <Icon size={20} stroke={1.5} className="h-[30px] w-[30px]" />
          <span className="ml-1 flex items-center">{label}</span>
        </Box>
      ) : (
        <Icon size={20} stroke={1.5} className="h-[30px] w-[30px]" />
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
      className={`fixed left-0 top-0 z-[400] flex h-full flex-col border-r border-zinc-700 bg-sidebar transition-[width] duration-200 ${
        expanded ? "w-[300px]" : "w-[80px]"
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <Box className="flex h-[70px] w-full items-center justify-center border-b border-zinc-700">
        {expanded ? (
          <img
            src="/logo_dark.png"
            className="h-[70px] w-[250px] object-contain"
            alt="Inexture logo"
          />
        ) : (
          <img
            src="/logo.svg"
            className="h-[70px] w-[45px] object-contain"
            alt="Inexture logo"
          />
        )}
      </Box>

      <Box className="mt-5 flex w-full justify-center">
        <Stack gap={0}>{links}</Stack>
      </Box>
    </Box>
  );
}

export default Sidebar;




