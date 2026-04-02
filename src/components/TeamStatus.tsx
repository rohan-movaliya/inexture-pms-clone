import { Text, Divider, Box } from "@mantine/core";
import { IconFileTime } from "@tabler/icons-react";

const data = [
  { name: "In Office", value: "100", count: "16", color: "green" as const },
  { name: "Half Day", value: "0", count: "0", color: "yellow" as const },
  { name: "WFH", value: "100", count: "16", color: "teal" as const },
  { name: "On Leave", value: "0", count: "0", color: "red" as const },
];

const colorMap = {
  green: "border-green-500",
  yellow: "border-yellow-400",
  teal: "border-teal-400",
  red: "border-red-500",
};

function TeamStatus() {
  return (
    <Box className="flex h-full min-h-0 flex-col border border-zinc-700 p-4">
      <Box className="mb-4 flex shrink-0 items-center justify-between">
        <Text size="lg" fw={700} className="flex items-center gap-2">
          <IconFileTime size={24} />
          Your Team Status
        </Text>
        <Text size="lg" fw={700} ta="right">
          Strength: 16
        </Text>
      </Box>

      <Divider className="-mx-4 shrink-0" />

      <Box className="mb-4 mt-8 grid min-h-0 flex-1 auto-rows-start grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 content-start">
        {data.map((item) => (
          <Box
            key={item.name}
            className={`flex flex-col border-l-[6px] ${colorMap[item.color]} pl-4 py-3 rounded-md`}
          >
            <Text size="md" fw={500}>
              {item.name}
            </Text>

            <Box className="flex items-end gap-2">
              <Text fw={900} style={{ fontSize: "32px" }} c="gray.2">
                {item.count.toString().padStart(2, "0")}
              </Text>

              <Text size="lg" c="dimmed">
                {item.value}%
              </Text>
            </Box>
          </Box>
        ))}
      </Box>

      <Divider className="-mx-4 shrink-0" />

      <Box className="mt-4 flex shrink-0 items-center justify-between">
        <Text size="lg" className="flex items-center gap-2">
          Your overall team attendance is 100%.
        </Text>
      </Box>
    </Box>
  );
}

export default TeamStatus;
