import { useGetEmployeeDetailsQuery } from "@/services/resourceManagement/resourceManagement.service";
import {
  Stack,
  Group,
  Paper,
  Text,
  Grid,
  Table,
  Avatar,
  Badge,
  Indicator,
} from "@mantine/core";
import { IconUsers } from "@tabler/icons-react";

function ResourceManagement() {
  const { data: employees } = useGetEmployeeDetailsQuery({
    limit: 5,
    search: "",
    team: "",
    designation: "",
    project: "",
  });

  const rows =
    employees?.data?.map((employee) => (
      <Table.Tr key={employee.id}>
        <Table.Td ta="center">
          <Indicator inline label={employee.id} size={16} color="red" withBorder>
            <Avatar size="md" src={employee.image} />
          </Indicator>
        </Table.Td>
        <Table.Td ta="center">
          {employee.first_name} {employee.last_name}
        </Table.Td>
        <Table.Td ta="center">{employee.designation}</Table.Td>
        <Table.Td ta="center">{employee.team}</Table.Td>
        <Table.Td ta="center">
          {employee.projects?.map((project, index) => (
            <Badge key={index} color="lime.4" variant="filled">
              {project}
            </Badge>
          ))}
        </Table.Td>
      </Table.Tr>
    )) ?? [];

  return (
    <Stack gap="md" m="md">
      <Paper p="md" shadow="xs">
        <Group justify="space-between" align="center">
          <Group gap={8}>
            <IconUsers size={24} />
            <Text size="lg" fw={700}>
              Resource Management
            </Text>
          </Group>
        </Group>
      </Paper>

      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper withBorder p="md" shadow="xs">
            <Text fw={500}>Resource 1</Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper withBorder p="md" shadow="xs">
            <Text fw={500}>Resource 2</Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper withBorder p="md" shadow="xs">
            <Text fw={500}>Resource 3</Text>
          </Paper>
        </Grid.Col>
      </Grid>
      <Paper withBorder shadow="xs">
        <Table.ScrollContainer minWidth={500} maxHeight={600}>
          <Table stickyHeader striped highlightOnHover withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th ta="center">Id</Table.Th>
                <Table.Th ta="center">Employee Name</Table.Th>
                <Table.Th ta="center">Designation</Table.Th>
                <Table.Th ta="center">Team</Table.Th>
                <Table.Th ta="center">Project</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Paper>
    </Stack>
  );
}

export default ResourceManagement;
