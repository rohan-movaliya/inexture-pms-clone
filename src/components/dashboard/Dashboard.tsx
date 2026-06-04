import { Flex, Container, Grid, Paper } from "@mantine/core";
import WeeklyTimeLog from "./weeklyTimeLog/WeeklyTimeLog";
import WeeklyWorkLog from "./weeklyWorkLog/WeeklyWorkLog";
import DefaulterStatus from "./defaulterStatus/DefaulterStatus";
import TimeTracker from "./timeTracker/TimeTracker";
import TeamStatistics from "./teamStatistics/TeamStatistics";
import MyLeaves from "./myLeaves/MyLeaves";
import LeaveToday from "./leaveToday/LeaveToday";
import UpcomingLeaves from "./upcomingLeaves/UpcomingLeaves";
import WFHToday from "./wfhToday/WFHToday";
import PrevDayTimeLog from "./prevDayTimeLog/PrevDayTimeLog";
import LeaveCompensation from "./leaveCompensation/LeaveCompensation";
import WorkAnniversary from "./workAnniversary/WorkAnniversary";
import Birthdays from "./birthdays/Birthdays";
import Holidays from "./holidays/Holidays";
import Insights from "./insights/Insights";
import NewEmployee from "./newEmployee/NewEmployee";

function DashboardCell({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" flex={1} h="100%" mih={0} miw={0}>
      {children}
    </Flex>
  );
}

function Dashboard() {
  return (
    <Container fluid>
      {/* ROW 1 */}
      <Grid align="stretch" grow>
        <Grid.Col
          span={{ base: 12, xs: 6 }}
          style={{
            display: "flex",
          }}
        >
          <DashboardCell>
            <WeeklyTimeLog />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 6 }}
          style={{
            display: "flex",
          }}
        >
          <DashboardCell>
            <WeeklyWorkLog />
          </DashboardCell>
        </Grid.Col>
        {/* ROW 2 */}
        <Grid.Col
          span={{ base: 12, xs: 6 }}
          style={{
            display: "flex",
          }}
        >
          <DashboardCell>
            <DefaulterStatus />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 2 }}
          style={{
            display: "flex",
          }}
        >
          <DashboardCell>
            <TimeTracker />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 4 }}
          style={{
            display: "flex",
          }}
        >
          <DashboardCell>
            <TeamStatistics />
          </DashboardCell>
        </Grid.Col>
        {/* ROW 3 */}
        <Grid.Col
          span={{ base: 12, xs: 2 }}
          style={{
            display: "flex",
          }}
        >
          <DashboardCell>
            <MyLeaves />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 2 }}
          style={{
            display: "flex",
          }}
        >
          <DashboardCell>
            <LeaveToday />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 2 }}
          style={{
            display: "flex",
          }}
        >
          <DashboardCell>
            <UpcomingLeaves />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 2 }}
          style={{
            display: "flex",
          }}
        >
          <DashboardCell>
            <WFHToday />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 2 }}
          style={{
            display: "flex",
          }}
        >
          <DashboardCell>
            <PrevDayTimeLog />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 2 }}
          style={{
            display: "flex",
          }}
        >
          <DashboardCell>
            <LeaveCompensation />
          </DashboardCell>
        </Grid.Col>

        {/* ROW 4 */}
        <Grid.Col
          span={{ base: 12, xs: 4 }}
          style={{
            display: "flex",
            minWidth: 0,
          }}
        >
          <DashboardCell>
            <WorkAnniversary />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 4 }}
          style={{
            display: "flex",
            minWidth: 0,
          }}
        >
          <DashboardCell>
            <Birthdays />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 4 }}
          style={{
            display: "flex",
            minWidth: 0,
          }}
        >
          <DashboardCell>
            <Holidays />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 4 }}
          style={{
            display: "flex",
            minWidth: 0,
          }}
        >
          <DashboardCell>
            <Insights />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 4 }}
          style={{
            display: "flex",
          }}
        >
          <DashboardCell>
            <NewEmployee />
          </DashboardCell>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 4 }}
          style={{
            display: "flex",
          }}
        >
          <DashboardCell>
            <Paper
              withBorder
              h="100%"
              mt="md"
              miw={0}
              style={{ overflow: "hidden" }}
            ></Paper>
          </DashboardCell>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Dashboard;
