import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconBrandApple, IconBrandGoogle } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../layouts/AuthLayout";
import api from "../../api/axios";
import { ENDPOINTS } from "../../api/endpoints";

export default function SigninPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: { email: "", password: "", remember: true },
    validate: {
      email: (v) => (/^\S+@\S+\.\S+$/.test(v) ? null : "Enter a valid email address"),
      password: (v) => (v ? null : "Password is required"),
    },
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await api.post(ENDPOINTS.AUTH.SIGNIN, {
        email: values.email,
        password: values.password,
      });

      const { access, refresh } = res.data;

      // Remember-me controls persistence
      const storage = values.remember ? localStorage : sessionStorage;
      storage.setItem("accessToken", access);
      storage.setItem("refreshToken", refresh);

      notifications.show({ title: "Signed in", message: "Welcome back!" });
      navigate("/dashboard");
    } catch (err) {
      const status = err?.response?.status;
      notifications.show({
        title: "Sign in failed",
        message: status === 401 ? "Invalid email or password." : "Try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back!"
      subtitle="Enter your credentials to access your account"
      imageSrc="/authImages/sign-in.jpg"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="sm">
          <TextInput
            label="Email address"
            placeholder="Enter your email"
            autoComplete="email"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label={
              <Group justify="space-between" w="100%">
                <Text size="sm">Password</Text>
                <Anchor
                  size="xs"
                  component="button"
                  type="button"
                  c="#0F3DDE"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot password
                </Anchor>
              </Group>
            }
            placeholder="Enter your password"
            autoComplete="current-password"
            {...form.getInputProps("password")}
          />

          <Checkbox color="#3A5B22"
            label="Remember for 30 days"
            {...form.getInputProps("remember", { type: "checkbox" })}
          />

          <Button type="submit" fullWidth loading={loading} mt="xs" radius="xl" color="#3A5B22">
            Sign In
          </Button>

          <Divider label="or" labelPosition="center" my="xs" />

          <Group grow>
            <Button
              variant="default"
              leftSection={<IconBrandGoogle size={18} />}
              type="button"
              onClick={() =>
                notifications.show({
                  title: "Not implemented",
                  message: "Google sign-in will be added later.",
                })
              }
            >
              Sign in with Google
            </Button>

            <Button
              variant="default"
              leftSection={<IconBrandApple size={18} />}
              type="button"
              onClick={() =>
                notifications.show({
                  title: "Not implemented",
                  message: "Apple sign-in will be added later.",
                })
              }
            >
              Sign in with Apple
            </Button>
          </Group>

          <Text size="sm" ta="center" mt="xs">
            Don't have an account?{" "}
            <Anchor component="button" type="button" c="#0F3DDE" onClick={() => navigate("/signup")}>
              Sign Up
            </Anchor>
          </Text>
        </Stack>
      </form>
    </AuthLayout>
  );
}
