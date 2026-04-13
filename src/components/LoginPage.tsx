import {
  BackgroundImage,
  Paper,
  Flex,
  Textarea,
  Text,
  Image,
  Button,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import type { AppDispatch } from "../store/index.ts";
import { authActions } from "../store/authSlice.ts";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type FormData = {
  accessToken: string;
};

function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const token = data.accessToken.trim();
    if (!token) return;

    dispatch(authActions.setAccessToken(token));
    navigate("/", { replace: true });
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
                  Access Token
                </Text>
              }
              minRows={10}
              autosize
              size="md"
              mt="sm"
              error={errors.accessToken && "Access token is required"}
              {...register("accessToken", { required: true })}
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
