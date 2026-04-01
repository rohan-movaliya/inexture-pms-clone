import { Container, Grid, Skeleton } from "@mantine/core";
import WeeklyTimeLog from "./WeeklyTimeLog";
import DefaulterStatus from "./DefaulterStatus";
import TeamStatus from "./TeamStatus";

const child = <Skeleton height={140} radius="md" animate={false} />;

function Dashboard() {
  return (
    <Container fluid>
      <Grid grow>
        <Grid.Col  span={{ base: 12, xs: 6 }}>
          <WeeklyTimeLog />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <WeeklyTimeLog />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <DefaulterStatus />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <TeamStatus/>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Dashboard;
