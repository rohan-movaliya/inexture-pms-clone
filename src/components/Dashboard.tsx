import { Container, Grid, Skeleton } from "@mantine/core";
import styles from "./Dashboard.module.css";
// import WeeklyTimeLog from "./WeeklyTimeLog";


const child = <Skeleton height={140} radius="md" animate={false} />;

const Dashboard = () => {
  return (
    <Container fluid p="md"className={styles.container}>
      <Grid className={styles.grid} gutter="md" >
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 2 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 2 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 2 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 2 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 2 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 2 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col className={styles.gridCol} span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
      </Grid>
    </Container>
  );
};

export default Dashboard;
