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

export default function RegisterForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Failed to register");

      alert(`Account created! Redirecting to login...`);
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
      alert("Error registering account.");
    }
  };

  return (
    <Box maw={400} mx="auto" mt="xl">
      <Title order={2} mb="md" ta="center">
        Register
      </Title>

      <Stack>
        <TextInput
          label="Username"
          placeholder="Choose a username"
          value={form.username}
          onChange={(e) => handleChange("username", e.currentTarget.value)}
          required
        />

        <PasswordInput
          label="Password"
          placeholder="Choose a password"
          value={form.password}
          onChange={(e) => handleChange("password", e.currentTarget.value)}
          required
        />

        <Button onClick={handleSubmit} fullWidth>
          Register
        </Button>
        <Button variant="subtle" component={Link} to="/login">
          Back to Login
        </Button>
      </Stack>
    </Box>
  );
}
