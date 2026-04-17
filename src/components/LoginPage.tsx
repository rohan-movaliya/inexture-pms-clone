import {
  BackgroundImage,
  Button,
  Flex,
  Image,
  Paper,
  Text,
  Textarea,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../store/authSlice.ts";
import type { AppDispatch } from "../store/index.ts";

type FormData = {
  refreshToken: string;
};

function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const refreshToken = data.refreshToken.trim();
    if (!refreshToken) return;

    const controller = new AbortController();

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh_token: refreshToken,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        // handle API errors properly
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData?.detail || "Login failed");
      }

      const result = await response.json();
      console.log("Login response:", result);

      // dispatch full object (matches your fixed slice)
      dispatch(setToken(result));

      // redirect after login
      navigate("/", { replace: true });
    } catch (error: unknown) {
      if (error instanceof DOMException && error.name === "AbortError") {
        console.log("Request aborted");
      } else if (error instanceof Error) {
        console.error("Login error:", error.message);
      } else {
        console.error("Login error:", "Unknown error");
      }
    }
  };

  return (
    <BackgroundImage src="10_login_page_bg.svg" h="100vh">
      <Flex justify="center" align="center" h="100%">
        <Paper withBorder shadow="xs" p="xl" w={800}>
          <Flex justify="center" mb="md">
            <Image h={30} fit="contain" src="2_logo_dark.png" />
          </Flex>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Textarea
              label={
                <Text span size="lg">
                  Refresh Token
                </Text>
              }
              minRows={10}
              autosize
              size="md"
              mt="sm"
              error={errors.refreshToken && "Refresh token is required"}
              {...register("refreshToken", { required: true })}
            />

            <Button
              type="submit"
              fullWidth
              size="md"
              radius="md"
              mt="xs"
              style={{ color: "white", fontWeight: 600 }}
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </Flex>
    </BackgroundImage>
  );
}

export default LoginPage;
