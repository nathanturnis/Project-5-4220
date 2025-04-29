import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Box,
  Title,
} from "@mantine/core";
import { Link } from "react-router";

export default function LoginForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Failed to login");

      //const data = await response.json();
      window.location.href = "/";
      // You can redirect or save token here
    } catch (err) {
      console.error(err);
      alert("Invalid credentials or server error.");
    }
  };

  return (
    <Box maw={400} mx="auto" mt="xl">
      <Title order={2} mb="md" ta="center">
        Login
      </Title>

      <Stack>
        <TextInput
          label="Username"
          placeholder="Username"
          value={form.username}
          onChange={(e) => handleChange("username", e.currentTarget.value)}
          required
        />

        <PasswordInput
          label="Password"
          placeholder="Your password"
          value={form.password}
          onChange={(e) => handleChange("password", e.currentTarget.value)}
          required
        />

        <Button onClick={handleSubmit} fullWidth>
          Login
        </Button>
        <Button variant="subtle" component={Link} to="/register">
          Register
        </Button>
      </Stack>
    </Box>
  );
}
