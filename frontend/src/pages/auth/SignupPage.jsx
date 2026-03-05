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

export default function SignupPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      acceptTerms: false,
    },

    validate: {
      name: (v) => (v.trim().length >= 2 ? null : "Name must be at least 2 characters"),
      email: (v) => (/^\S+@\S+\.\S+$/.test(v) ? null : "Enter a valid email address"),
      password: (v) => (v.length >= 8 ? null : "Password must be at least 8 characters"),
      acceptTerms: (v) => (v ? null : "You must accept the terms to continue"),
    },
  });

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      await api.post(ENDPOINTS.AUTH.SIGNUP, {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      notifications.show({
        title: "Account created",
        message: "You can now sign in.",
      });

      // send user to signin after successful signup
      navigate("/signin");
    } catch (err) {
      const message =
        err?.response?.data?.detail ||
        "Signup failed. Please check your details and try again.";

      notifications.show({
        title: "Signup failed",
        message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Get Started Now"
      subtitle="" 
      imageSrc="/authImages/sign-up.jpg"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="sm">
          <TextInput
            label="Name"
            placeholder="Enter your name"
            {...form.getInputProps("name")}
          />

          <TextInput
            label="Email address"
            placeholder="Enter your email"
            autoComplete="email"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            autoComplete="new-password"
            {...form.getInputProps("password")}
          />

          <Checkbox
            {...form.getInputProps("acceptTerms", { type: "checkbox" })}
            label={
              <Text size="xs">
                I agree to the{" "}
                <Anchor size="xs" href="/terms" target="_blank">
                  Terms and Conditions
                </Anchor>{" "}
              </Text>
            }
          />

          <Button type="submit" fullWidth loading={loading} mt="xs" bg="digitalBlue.9" radius="xl">
            Sign Up
          </Button>

          <Divider label="Or" labelPosition="center" my="xs" />

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
            Have an account?{" "}
            <Anchor component="button" type="button" onClick={() => navigate("/signin")}>
              Sign In
            </Anchor>
          </Text>
        </Stack>
      </form>
    </AuthLayout>
  );
}
