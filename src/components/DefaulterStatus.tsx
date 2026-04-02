import { Text, Divider, Box } from "@mantine/core";
import { IconFileTime } from "@tabler/icons-react";

const data = [
  { count: 0, label: "Working Hours & Flexibility" },
  { count: 0, label: "Work From Home" },
  { count: 0, label: "Time Entries" },
  { count: 0, label: "Worklog (EOD)" },
  { count: 0, label: "Leaves" },
  { count: 0, label: "Game Zone" },
  { count: 0, label: "Others" },
  { count: 0, label: "Total" },
];

function DefaulterStatus() {
  return (
    <Box className="flex h-full min-h-0 flex-col border border-zinc-700 p-4">
      <Box className="mb-4 flex shrink-0 items-center justify-between">
        <Text size="lg" fw={700} className="flex items-center gap-2">
          <IconFileTime size={24} />
          Your Defaulter Status
        </Text>
      </Box>

      <Divider className="-mx-4 shrink-0" />

      <Box className="my-4 grid min-h-0 flex-1 auto-rows-start grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 content-start">
        {data.map((item) => (
          <Box
            key={item.label}
            className="flex flex-col items-center justify-center border border-zinc-700 rounded-md py-6"
          >
            <Text fw={900} className="text-2xl md:text-4xl text-cyan-400">
              {item.count}
            </Text>

            <Text size="lg" fw={500} className="text-gray-300">
              {item.label}
            </Text>
          </Box>
        ))}
      </Box>

      <Divider className="-mx-4 shrink-0" />

      <Box className="mt-4 flex shrink-0 items-center justify-between">
        <Text size="lg" className="flex items-center gap-2">
          Well done for keeping things in order within the rules.
        </Text>
      </Box>
    </Box>
  );
}

export default DefaulterStatus;
