import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSunLow, IconMoon } from "@tabler/icons-react";

import cx from "clsx";
import classes from "./BlackLightTheme.module.css";

function BlackLightTheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="subtle"
      size="lg"
      aria-label="Toggle theme"
    >
      <IconMoon className={cx(classes.icon, classes.light)} />
      <IconSunLow className={cx(classes.icon, classes.dark)} />
    </ActionIcon>
  );
}

export default BlackLightTheme;
