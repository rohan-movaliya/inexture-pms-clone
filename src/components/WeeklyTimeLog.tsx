import { Container, Grid, Divider, Text, UnstyledButton } from "@mantine/core";
import { IconFileTime, IconChevronLeft, type TablerIcon } from "@tabler/icons-react";

const data = [
  { date: "30 Mar", day: "Mon", time: "07:05:35", color: "text-red-500" },
  { date: "31 Mar", day: "Tue", time: "0" },
  { date: "01 Apr", day: "Wed", time: "0" },
  { date: "02 Apr", day: "Thu", time: "0" },
  { date: "03 Apr", day: "Fri", time: "0" },
];

interface WeeklyTimeLogProps {
  title?: string;
  headerIcon?: TablerIcon;
}

function WeeklyTimeLog({
  title = "Weekly Time Log",
  headerIcon: HeaderIcon = IconFileTime,
}: WeeklyTimeLogProps) {
  return (
    <Container
      fluid
      className="flex w-full h-full min-h-0 flex-col rounded-md border border-zinc-700 p-4  mt-4"
    >
      <div className="mb-4 flex shrink-0 items-center justify-between">
        <Text size="lg" fw={700} className="flex items-center gap-2">
          <HeaderIcon size={24} />
          {title}
        </Text>

        <UnstyledButton
          type="button"
          aria-label="Previous week"
          className="flex text-zinc-400 hover:text-zinc-200"
        >
          <IconChevronLeft size={26} />
        </UnstyledButton>
      </div>

      <Divider className="shrink-0" />
      <Grid my="md" className="min-h-0 flex-1">
        {data.map((item) => (
          <Grid.Col span={{ base: 12, xs: 4 }} key={item.date}>
            <div className="flex border border-zinc-700 rounded-md overflow-hidden">
              <div className="bg-zinc-700 px-3 py-2 text-center text-lg text-white">
                <div>{item.date}</div>
                <div className="font-semibold">{item.day}</div>
              </div>

              <div className="flex items-center justify-end flex-1 text-lg pr-3 font-semibold text-cyan-400">
                {item.time}
              </div>
            </div>
          </Grid.Col>
        ))}

        <Grid.Col span={{ base: 12, xs: 4 }}>
          <div className="flex flex-col items-center justify-center border border-zinc-700 rounded-md h-full text-zinc-200 bg-zinc-700">
            <div className="text-2xl font-semibold">7h 5m 35s</div>
            <div className="text-sm text-zinc-400">Total</div>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default WeeklyTimeLog;
