import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Group,
  Paper,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import type { AppDispatch } from "../store/index.ts";
import { authActions } from "../store/authSlice.ts";

const pageBg = "#c69648";
const cardBg = "#212529";
const accent = "#ff9f00";
const labelColor = "#adb5bd";

function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState<string>("");

  const handleSubmit = () => {
    const token = accessToken.trim();
    if (!token) return;
    dispatch(authActions.setAccessToken(token));
    navigate("/", { replace: true });
  };

  return (
    <Box style={{ backgroundColor: pageBg, minHeight: "100vh" }}>
      <Box
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <Paper
          radius={16}
          p={0}
          style={{
            maxWidth: 1000,
            width: "100%",
            overflow: "hidden",
            backgroundColor: cardBg,
            border: "2px solid rgb(255, 255, 255)",
          }}
        >
          <Group align="stretch" gap={0} wrap="nowrap">
            <Stack flex={1} gap="md" p={{ base: "lg", sm: 40  }}>
              <Textarea
                label={
                  <Text span c={labelColor} size="sm">
                    Access Token
                  </Text>
                }
                value={accessToken}
                onChange={(e) => setAccessToken(e.currentTarget.value)}
                minRows={10}
                autosize
                size="lg"
              />

              <Button
                fullWidth
                size="md"
                radius="md"
                mt="sm"
                style={{
                  backgroundColor: accent,
                  color: "white",
                  fontWeight: 600,
                }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </Stack>
          </Group>
        </Paper>
      </Box>
    </Box>
  );
}

export default LoginPage;
