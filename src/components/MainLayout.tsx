import { AppShell } from "@mantine/core";
import { useState } from "react";
import { Header } from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const [expanded, setExpanded] = useState(false); // desktop expand/collapse

  return (
    <>
      <Sidebar expanded={expanded} setExpanded={setExpanded} />
      <AppShell layout="default" padding={0} header={{ height: 70 }}>
        <AppShell.Header withBorder={false}>
          <div
            style={{
              marginLeft: 80,
            }}
          >
            <Header />
          </div>
        </AppShell.Header>

        <AppShell.Main>
          <div
            style={{
              marginLeft: 80,
            }}
          >
            <Outlet />
          </div>
        </AppShell.Main>
      </AppShell>
    </>
  );
}

export default MainLayout;

