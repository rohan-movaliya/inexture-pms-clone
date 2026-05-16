import type { ReactNode } from "react";
import { Box, Container, Grid } from "@mantine/core";
import classes from "./Dashboard.module.css";
import WeeklyTimeLog from "./weeklTimeLog/WeeklyTimeLog";
import WeeklyWorkLog from "./weeklyWorkLog/WeeklyWorkLog";
import DefaulterStatus from "./defaulterStatus/DefaulterStatus";
import TimeTracker from "./timeTracker/TimeTracker";
import TeamStatus from "./teamStatistics/TeamStatus";
import Insights from "../Insights";
import BirthDays from "../BirthDays";
import MyLeaves from "./myLeaves/MyLeaves";
import LeaveToday from "./leaveToday/LeaveToday";

/** Fills the stretched Mantine Grid.Col so child cards share the row height. */
function DashboardCell({ children }: { children: ReactNode }) {
  return <Box className={classes.cell}>{children}</Box>;
}

function Dashboard() {
  return (
    <Container fluid>
      {/* ROW 1 */}
      <Grid align="stretch" grow>
        <Grid.Col span={{ base: 12, xs: 6 }} className={classes.column}>
          <DashboardCell>
            <WeeklyTimeLog />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }} className={classes.column}>
          <DashboardCell>
            <WeeklyWorkLog />
          </DashboardCell>
        </Grid.Col>
        {/* ROW 2 */}
        <Grid.Col span={{ base: 12, xs: 6 }} className={classes.column}>
          <DashboardCell>
            <DefaulterStatus />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }} className={classes.column}>
          <DashboardCell>
            <TimeTracker />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }} className={classes.column}>
          <DashboardCell>
            <TeamStatus />
          </DashboardCell>
        </Grid.Col>
        {/* ROW 3 */}
        <Grid.Col span={{ base: 12, xs: 2 }} className={classes.column}>
          <DashboardCell>
            <MyLeaves/>
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }} className={classes.column}>
          <DashboardCell>
            <LeaveToday/>
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }} className={classes.column}>
          {/* <DashboardCell>
            <LeaveAndAttendanceOverview
              title="Upcoming leaves"
              headline="3"
              rows={[
                { label: "This week", value: "1" },
                { label: "Next week", value: "2" },
              ]}
              iconSrc="/6_upcoming_leaves.svg"
            />
          </DashboardCell> */}
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }} className={classes.column}>
          {/* <DashboardCell>
            <LeaveAndAttendanceOverview
              title="WFH today"
              headline="2"
              rows={[
                { label: "Team WFH", value: "2" },
                { label: "Capacity", value: "87%" },
              ]}
              iconSrc="/7_wfh_today.svg"
            />
          </DashboardCell> */}
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }} className={classes.column}>
          {/* <DashboardCell>
            <LeaveAndAttendanceOverview
              title="Time log — previous day"
              headline="8h 00m"
              rows={[
                { label: "Logged", value: "8h 00m" },
                { label: "Status", value: "Complete" },
              ]}
              iconSrc="/7_prev_log_time.svg"
            />
          </DashboardCell> */}
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }} className={classes.column}>
          {/* <DashboardCell>
            <LeaveAndAttendanceOverview
              title="My leave compensation"
              headline="0"
              rows={[
                { label: "Pending", value: "0" },
                { label: "Approved", value: "0" },
              ]}
              iconSrc="/8_time_compensation.png"
            />
          </DashboardCell> */}
        </Grid.Col>
        {/* ROW 4 */}
        <Grid.Col span={{ base: 12, xs: 4 }} className={classes.column}>
          <DashboardCell>
            <Insights />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }} className={classes.column}>
          <DashboardCell>
            <Insights title="Employee of the month" />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }} className={classes.column}>
          <DashboardCell>
            <BirthDays />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }} className={classes.column}>
          <DashboardCell>
            <Insights title="Today's work anniversary" />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }} className={classes.column}>
          <DashboardCell>
            <Insights title="New joiners" />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }} className={classes.column}>
          <DashboardCell>
            <BirthDays variant="holidays" />
          </DashboardCell>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Dashboard;
