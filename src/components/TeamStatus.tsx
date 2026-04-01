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
    <Box className="border border-zinc-700 p-4">
      {/* Header */}
      <Box className="flex items-center justify-between mb-4">
        <Text size="lg" fw={700} className="flex items-center gap-2">
          <IconFileTime size={24} />
          Your Team Status
        </Text>
        <Text size="lg" fw={700} ta="right">
          Strength: 16
        </Text>
      </Box>

      <Divider className="-mx-4" />

      {/* Grid */}
      <Box className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 gap-4 mt-8 mb-4">
        {data.map((item, i) => (
          <Box
            key={i}
            className={`flex flex-col border-l-6 ${colorMap[item.color]} pl-4 py-3 rounded-md`}
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

      <Divider className="-mx-4" />

      {/* Footer */}
      <Box className="flex items-center justify-between mt-4">
        <Text size="lg" className="flex items-center gap-2">
          Your overall team attendance is 100%.
        </Text>
      </Box>
    </Box>
  );
}

export default TeamStatus;
