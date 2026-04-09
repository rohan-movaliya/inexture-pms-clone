import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import { Header } from "./Header";
import Sidebar from "./Sidebar";
import type { RootState } from "../store/index.ts";

function MainLayout() {
  
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }


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

