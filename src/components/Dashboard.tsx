import { Container, Grid, Skeleton } from "@mantine/core";

const child = <Skeleton height={140} radius="md" animate={false} />;

const Dashboard = () => {
  return (
    <Container fluid p="md" className="w-full bg-black">
      <Grid gutter="md" className="w-full bg-black">
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 6 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 6 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 8 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 4 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 2 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 2 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 2 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 2 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 2 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 2 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 4 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 4 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 4 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 4 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 4 }}>
          {child}
        </Grid.Col>
        <Grid.Col className="rounded-lg border border-neutral-800 bg-neutral-900 p-4" span={{ base: 12, xs: 4 }}>
          {child}
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Dashboard;
