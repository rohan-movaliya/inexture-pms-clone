import { Container, Grid } from "@mantine/core";
import WeeklyTimeLog from "./WeeklyTimeLog";
import DefaulterStatus from "./DefaulterStatus";
import TeamStatus from "./TeamStatus";
import Leaves from "./MyLeaves";

function Dashboard() {
  return (
    <Container fluid>
      <Grid grow>
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <WeeklyTimeLog />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <WeeklyTimeLog />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <DefaulterStatus />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <TeamStatus />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Leaves />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Leaves />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Leaves />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Leaves />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Leaves />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Leaves />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <TeamStatus />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <TeamStatus />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <TeamStatus />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <TeamStatus />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <TeamStatus />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <TeamStatus />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Dashboard;
