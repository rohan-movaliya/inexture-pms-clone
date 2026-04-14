import {
  ActionIcon,
  TextInput,
  Group,
  Kbd,
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
  IconLayoutGridAdd,
  IconBriefcase,
  IconCalendarTime,
  IconChecklist,
  IconDeviceGamepad,
} from "@tabler/icons-react";
import classes from "./Header.module.css";
import BlackLightTheme from "./BlackLightTheme";

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
              <div className={classes.shortcut}>
                <Kbd size="xs">Ctrl</Kbd>
                <span>+</span>
                <Kbd size="xs">K</Kbd>
              </div>
            }
          />
        </Group>
      </div>

      <div className={classes.sideright}>
        <BlackLightTheme />

        <Menu
          width={260}
          position="bottom-end"
          transitionProps={{ transition: "pop-top-right" }}
          withinPortal
          withArrow
        >
          <Menu.Target>
            <ActionIcon
              className={classes.iconButton}
              variant="subtle"
              size="lg"
              aria-label="Quick links"
            >
              <IconLayoutGridAdd
                style={{ transform: "rotate(270deg)" }}
                size={22}
                stroke={1.5}
              />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown className={classes.dropdown}>
            <Menu.Label className={classes.menuLabel}>
              <IconLayoutGridAdd size={18} stroke={1.5} />
              <span>Quick Links</span>
            </Menu.Label>
            <Menu.Divider />
            <Grid gutter="xs">
              <Grid.Col span={6}>
                <Paper
                  p="md"
                  withBorder
                  radius="md"
                  className={classes.quickCard}
                >
                  <Center>
                    <Stack align="center" gap={6}>
                      <IconBriefcase
                        size={26}
                        stroke={1.5}
                        className={classes.menuIcon}
                      />
                      <Text className={`${classes.linksText} ${classes.mutedText}`}>
                        Projects
                      </Text>
                    </Stack>
                  </Center>
                </Paper>
              </Grid.Col>

              <Grid.Col span={6}>
                <Paper
                  p="md"
                  withBorder
                  radius="md"
                  className={classes.quickCard}
                >
                  <Center>
                    <Stack align="center" gap={6}>
                      <IconCalendarTime
                        size={26}
                        stroke={1.5}
                        className={classes.menuIcon}
                      />
                      <Text className={`${classes.linksText} ${classes.mutedText}`}>
                        Time Entry
                      </Text>
                    </Stack>
                  </Center>
                </Paper>
              </Grid.Col>

              <Grid.Col span={6}>
                <Paper
                  p="md"
                  withBorder
                  radius="md"
                  className={classes.quickCard}
                >
                  <Center>
                    <Stack align="center" gap={6}>
                      <IconChecklist
                        size={26}
                        stroke={1.5}
                        className={classes.menuIcon}
                      />
                      <Text className={`${classes.linksText} ${classes.mutedText}`}>
                        Tasks
                      </Text>
                    </Stack>
                  </Center>
                </Paper>
              </Grid.Col>

              <Grid.Col span={6}>
                <Paper
                  p="md"
                  withBorder
                  radius="md"
                  className={classes.quickCard}
                >
                  <Center>
                    <Stack align="center" gap={6}>
                      <IconDeviceGamepad
                        size={26}
                        stroke={1.5}
                        className={classes.menuIcon}
                      />
                      <Text className={`${classes.linksText} ${classes.mutedText}`}>
                        Game Zone
                      </Text>
                    </Stack>
                  </Center>
                </Paper>
              </Grid.Col>
            </Grid>
          </Menu.Dropdown>
        </Menu>

        <Menu
          width={260}
          position="bottom-end"
          transitionProps={{ transition: "pop-top-right" }}
          withinPortal
          withArrow
        >
          <Menu.Target>
            <UnstyledButton className={classes.user}>
              <Avatar color="cyan" radius="xl" size={40}>
                R
              </Avatar>
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
      </div>
    </header>
  );
}
