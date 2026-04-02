import type { ReactNode } from "react";
import { Box, Container, Grid } from "@mantine/core";
import { IconClipboardList } from "@tabler/icons-react";
import WeeklyTimeLog from "./WeeklyTimeLog";
import DefaulterStatus from "./DefaulterStatus";
import TeamStatus from "./TeamStatus";
import MyLeaves from "./MyLeaves";
import Insights from "./Insights";
import BirthDays from "./BirthDays";

/** Fills the stretched Mantine Grid.Col so child cards share the row height. */
function DashboardCell({ children }: { children: ReactNode }) {
  return (
    <Box className="flex min-h-0 w-full flex-1 flex-col">{children}</Box>
  );
}

function Dashboard() {
  return (
    <Container fluid>
      <Grid align="stretch" grow>
        <Grid.Col span={{ base: 12, xs: 6 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <WeeklyTimeLog />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <WeeklyTimeLog
              title="Weekly Work Log"
              headerIcon={IconClipboardList}
            />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <DefaulterStatus />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <TeamStatus />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <MyLeaves
              title="My Leaves"
              headline="17"
              rows={[
                { label: "Used leave", value: "0" },
                { label: "Remaining", value: "17" },
              ]}
            />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <MyLeaves
              title="Leaves today"
              headline="0"
              rows={[
                { label: "On leave", value: "0" },
                { label: "Half day", value: "0" },
              ]}
            />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <MyLeaves
              title="Upcoming leaves"
              headline="3"
              rows={[
                { label: "This week", value: "1" },
                { label: "Next week", value: "2" },
              ]}
            />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <MyLeaves
              title="WFH today"
              headline="2"
              rows={[
                { label: "Team WFH", value: "2" },
                { label: "Capacity", value: "87%" },
              ]}
            />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <MyLeaves
              title="Time log — previous day"
              headline="8h 00m"
              rows={[
                { label: "Logged", value: "8h 00m" },
                { label: "Status", value: "Complete" },
              ]}
            />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <MyLeaves
              title="My leave compensation"
              headline="0"
              rows={[
                { label: "Pending", value: "0" },
                { label: "Approved", value: "0" },
              ]}
            />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <Insights />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <Insights title="Employee of the month" />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <BirthDays />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <Insights title="Today's work anniversary" />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <Insights title="New joiners" />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }} className="flex min-h-0 flex-col">
          <DashboardCell>
            <BirthDays variant="holidays" />
          </DashboardCell>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Dashboard;
