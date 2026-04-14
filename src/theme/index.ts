import { createTheme } from "@mantine/core";
import type { MantineColorsTuple } from "@mantine/core";

const myColor: MantineColorsTuple = [
  "#fff6e0",
  "#ffeccc",
  "#fbd89d",
  "#f8c36a",
  "#f6b13f",
  "#f4a41f",
  "#f4a011",
  "#d98b01",
  "#c27b00",
  "#a86900",
];

export const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: "myColor",
  fontFamily: "Open Sans, sans-serif",
});
