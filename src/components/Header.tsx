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
      <div className="flex flex-1 items-center justify-center">
        <Group>
          <TextInput
            className="w-[500px]"
            placeholder="Search"
            leftSection={<IconSearch size={16} stroke={1.5} />}
            rightSection={
              <div className="pointer-events-none absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1 text-[12px] text-gray-300">
                <Kbd size="xs">Ctrl</Kbd>
                <span>+</span>
                <Kbd size="xs">K</Kbd>
              </div>
            }
          />
        </Group>
      </div>

      <div className="flex items-center justify-end gap-2">
        <ActionIcon
          className="text-gray-300 hover:bg-white/10"
          variant="subtle"
          size="lg"
          aria-label="Toggle theme"
        >
          <IconBrightnessUp size={22} stroke={1.5} />
        </ActionIcon>

        <Menu
          width={260}
          position="bottom-end"
          transitionProps={{ transition: "pop-top-right" }}
          withinPortal
          withArrow
        >
          <Menu.Target>
            <ActionIcon
              className="text-gray-300 hover:bg-white/10"
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
          <Menu.Dropdown className="bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg">
            <Menu.Label className="flex items-center gap-2 text-[var(--color-text)]">
              <IconLayoutGridAdd size={18} stroke={1.5} />
              <span className="font-medium">Quick Links</span>
            </Menu.Label>
            <Menu.Divider />
            <Grid gutter="xs">
              <Grid.Col span={6}>
                <Paper
                  p="md"
                  withBorder
                  radius="md"
                  className="cursor-pointer bg-[var(--color-surface-soft)] border-[var(--color-border)] transition-colors hover:bg-[var(--color-border)]"
                >
                  <Center>
                    <Stack align="center" gap={6}>
                      <IconBriefcase
                        size={26}
                        stroke={1.5}
                        className="text-[var(--color-text)]"
                      />
                      <Text className="text-xs text-[var(--color-text-muted)]">
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
                  className="cursor-pointer bg-[var(--color-surface-soft)] border-[var(--color-border)] transition-colors hover:bg-[var(--color-border)]"
                >
                  <Center>
                    <Stack align="center" gap={6}>
                      <IconCalendarTime
                        size={26}
                        stroke={1.5}
                        className="text-[var(--color-text)]"
                      />
                      <Text className="text-xs text-[var(--color-text-muted)]">
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
                  className="cursor-pointer bg-[var(--color-surface-soft)] border-[var(--color-border)] transition-colors hover:bg-[var(--color-border)]"
                >
                  <Center>
                    <Stack align="center" gap={6}>
                      <IconChecklist
                        size={26}
                        stroke={1.5}
                        className="text-[var(--color-text)]"
                      />
                      <Text className="text-xs text-[var(--color-text-muted)]">
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
                  className="cursor-pointer bg-[var(--color-surface-soft)] border-[var(--color-border)] transition-colors hover:bg-[var(--color-border)]"
                >
                  <Center>
                    <Stack align="center" gap={6}>
                      <IconDeviceGamepad
                        size={26}
                        stroke={1.5}
                        className="text-[var(--color-text)]"
                      />
                      <Text className="text-xs text-[var(--color-text-muted)]">
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
