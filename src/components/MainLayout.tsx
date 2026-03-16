import { AppShell } from "@mantine/core";
import { useState } from "react";
import { Header } from "./Header";
import Sidebar from "./Sidebar";

function MainLayout() {
  const [expanded, setExpanded] = useState(false); // desktop expand/collapse

  return (
    <AppShell
      layout="default"
      padding="md"
      header={{ height: 60 }} 
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Navbar>
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
      </AppShell.Navbar>

      <AppShell.Main></AppShell.Main>
    </AppShell>
  );
}

export default MainLayout;

