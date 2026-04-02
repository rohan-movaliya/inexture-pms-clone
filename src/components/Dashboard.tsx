import { Container, Grid } from "@mantine/core";
import WeeklyTimeLog from "./WeeklyTimeLog";
import DefaulterStatus from "./DefaulterStatus";
import TeamStatus from "./TeamStatus";
import Leaves from "./MyLeaves";
import Insights from "./Insights";
import BithDays from "./BirthDays";

function Dashboard() {
  return (
    <Container fluid>
      <Grid grow>
        {/* Weekly Time Log */}
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <WeeklyTimeLog />
        </Grid.Col>
        {/* Weekly Work Log */}
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <WeeklyTimeLog />
        </Grid.Col>
        {/* Your Non Compliance Status*/}
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <DefaulterStatus />
        </Grid.Col>
        {/* Your Team Status*/}
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <TeamStatus />
        </Grid.Col>
        {/* My Leaves */}
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Leaves />
        </Grid.Col>
        {/* Leaves Today */}
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Leaves />
        </Grid.Col>
        {/* Upcoming Leaves */}
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Leaves />
        </Grid.Col>
        {/* WFH Today */}
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Leaves />
        </Grid.Col>
        {/* Time Log - Prev Day */}
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Leaves />
        </Grid.Col>
        {/* My Leave Compensation */}
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Leaves />
        </Grid.Col>
        {/* Insights */}
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Insights />
        </Grid.Col>
        {/* Employee of the Month */}
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Insights />
        </Grid.Col>
        {/* Birthdays */}
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <BithDays />
        </Grid.Col>
        {/* Today's Work Anniversary */}
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Insights />
        </Grid.Col>
        {/* New Joiners */}
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Insights />
        </Grid.Col>
        {/* Holidays */}
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <BithDays />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Dashboard;
