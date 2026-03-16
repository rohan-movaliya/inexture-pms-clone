import {
  TextInput,
  Group,
  Kbd,
  Box,
  Avatar,
  Grid,
  Menu,
  UnstyledButton,
  Paper,
  Center,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconSearch,
  IconUser,
  IconLogout,
  IconLock,
  IconBrightnessUp,
  IconLayoutGridAdd,
  IconBriefcase,
  IconCalendarTime,
  IconChecklist,
  IconDeviceGamepad,
} from "@tabler/icons-react";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <TextInput
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch size={16} stroke={1.5} />}
            rightSection={
              <Group gap={7}>
                <Box className={classes.shortcut}>
                  <Kbd size="xs">Ctrl</Kbd>
                  <span>+</span>
                  <Kbd size="xs">K</Kbd>
                </Box>
              </Group>
            }
          />
        </Group>
      </div>

      <div className={classes.sideright}>
        <Group>
          <Box>
            <IconBrightnessUp
              size={30}
              stroke={1.5}
              style={{ marginTop: "10px" }}
            />
          </Box>
        </Group>

        <Group>
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
            withinPortal
            withArrow
          >
            <Menu.Target>
              <UnstyledButton>
                <Group gap={7}>
                  <IconLayoutGridAdd
                    style={{ transform: "rotate(270deg)" }}
                    size={30}
                    stroke={1.5}
                  />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>
                <IconLayoutGridAdd />
                Quick Links
              </Menu.Label>
              <Menu.Divider />
              <Grid>
                <Grid.Col span={6}>
                  <Paper p="lg" withBorder radius="md">
                    <Center>
                      <Stack align="center" gap={5}>
                        <IconBriefcase size={28} stroke={1.5} />
                        <Text className={classes.linksText}>Projects</Text>
                      </Stack>
                    </Center>
                  </Paper>
                </Grid.Col>

                <Grid.Col span={6}>
                  <Paper p="lg" withBorder radius="md">
                    <Center>
                      <Stack align="center" gap={5}>
                        <IconCalendarTime size={28} stroke={1.5} />
                        <Text className={classes.linksText}>Time Entry</Text>
                      </Stack>
                    </Center>
                  </Paper>
                </Grid.Col>

                <Grid.Col span={6}>
                  <Paper p="lg" withBorder radius="md">
                    <Center>
                      <Stack align="center" gap={5}>
                        <IconChecklist size={28} stroke={1.5} />
                        <Text className={classes.linksText}>Tasks</Text>
                      </Stack>
                    </Center>
                  </Paper>
                </Grid.Col>

                <Grid.Col span={6}>
                  <Paper p="lg" withBorder radius="md">
                    <Center>
                      <Stack align="center" gap={5}>
                        <IconDeviceGamepad size={28} stroke={1.5} />
                        <Text className={classes.linksText}>Game Zone</Text>
                      </Stack>
                    </Center>
                  </Paper>
                </Grid.Col>
              </Grid>
            </Menu.Dropdown>
          </Menu>
        </Group>

        <Group>
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
            withinPortal
            withArrow
          >
            <Menu.Target>
              <UnstyledButton className={classes.user}>
                <Group>
                  <Avatar color="cyan" radius="xl" size="{55}">
                    R
                  </Avatar>
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Welcome!</Menu.Label>
              <Menu.Label>Rohan Movaliya</Menu.Label>
              <Menu.Divider />

              <Menu.Item leftSection={<IconUser size={25} stroke={1.5} />}>
                Account
              </Menu.Item>
              <Menu.Item leftSection={<IconLock size={25} stroke={1.5} />}>
                Change Password
              </Menu.Item>
              <Menu.Item leftSection={<IconLogout size={25} stroke={1.5} />}>
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </div>
    </header>
  );
}
