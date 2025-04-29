import { useState } from "react";
import {
  TextInput,
  Textarea,
  Select,
  Button,
  Stack,
  Box,
  Title,
  Group,
} from "@mantine/core";

export default function CommunityForm() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
    date_time: "",
    contact_email: "",
    contact_phone: "",
    organization: "",
    additional_info: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/community", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Failed to submit listing");

      const data = await response.json();
      alert(`Community listing created with ID: ${data.id}`);
    } catch (err) {
      console.error(err);
      alert("Error submitting community listing");
    }
  };

  return (
    <Box maw={600} mt="xl">
      <Title order={2} mb="md">
        Create Community Listing
      </Title>
      <Stack>
        <Select
          label="Category"
          data={[
            { label: "Activities", value: "activities" },
            { label: "Events", value: "events" },
            { label: "Groups", value: "groups" },
            { label: "Rideshare", value: "rideshare" },
            { label: "Volunteers", value: "volunteers" },
          ]}
          value={form.category}
          onChange={(val) => handleChange("category", val ?? "")}
          placeholder="Select category"
          required
        />

        <TextInput
          label="Title"
          value={form.title}
          onChange={(e) => handleChange("title", e.currentTarget.value)}
          required
        />

        <Textarea
          label="Description"
          value={form.description}
          onChange={(e) => handleChange("description", e.currentTarget.value)}
          autosize
          minRows={3}
          required
        />

        <TextInput
          label="Location"
          value={form.location}
          onChange={(e) => handleChange("location", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Date & Time"
          type="datetime-local"
          value={form.date_time}
          onChange={(e) => handleChange("date_time", e.currentTarget.value)}
          required
        />

        <Group grow>
          <TextInput
            label="Contact Email"
            value={form.contact_email}
            onChange={(e) =>
              handleChange("contact_email", e.currentTarget.value)
            }
            required
          />
          <TextInput
            label="Contact Phone"
            value={form.contact_phone}
            onChange={(e) =>
              handleChange("contact_phone", e.currentTarget.value)
            }
            required
          />
        </Group>

        <TextInput
          label="Organization"
          value={form.organization}
          onChange={(e) => handleChange("organization", e.currentTarget.value)}
          required
        />

        <Textarea
          label="Additional Info"
          value={form.additional_info}
          onChange={(e) =>
            handleChange("additional_info", e.currentTarget.value)
          }
          autosize
          minRows={2}
          required
        />

        <Button onClick={handleSubmit}>Submit</Button>
      </Stack>
    </Box>
  );
}
