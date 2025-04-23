import { useState } from "react";
import {
  TextInput,
  Textarea,
  NumberInput,
  Select,
  Button,
  Stack,
  Box,
  Title,
} from "@mantine/core";
import { ServiceListing } from "../../types/service";

export default function ServiceForm() {
  const [form, setForm] = useState<ServiceListing>({
    id: 0,
    title: "",
    category: "",
    provider_name: "",
    location: "",
    price: undefined,
    description: "",
    contact_email: "",
    contact_phone: "",
    available_days: "",
    experience_years: undefined,
    certifications: "",
  });

  const handleChange = (
    key: keyof ServiceListing,
    value: string | number | undefined
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Submission failed");

      const data = await response.json();
      alert(`Service listing created with ID: ${data.id}`);
    } catch (error) {
      console.error(error);
      alert("Error submitting service listing");
    }
  };

  return (
    <Box maw={600} mx="auto" mt="xl">
      <Title order={2} mb="md">
        Create Service Listing
      </Title>
      <Stack>
        <TextInput
          label="Title"
          value={form.title}
          onChange={(e) => handleChange("title", e.currentTarget.value)}
          required
        />

        <Select
          label="Category"
          data={[
            { value: "PET", label: "Pet" },
            { value: "CLEAN", label: "Cleaning" },
            { value: "COMP", label: "Computer" },
            { value: "FIN", label: "Financial" },
            { value: "AUTO", label: "Automotive" },
          ]}
          value={form.category}
          onChange={(val) => handleChange("category", val ?? "")}
          placeholder="Select category"
          required
        />

        <TextInput
          label="Provider Name"
          value={form.provider_name}
          onChange={(e) => handleChange("provider_name", e.currentTarget.value)}
        />

        <TextInput
          label="Location"
          value={form.location}
          onChange={(e) => handleChange("location", e.currentTarget.value)}
        />

        <NumberInput
          label="Price"
          value={form.price}
          onChange={(val) => handleChange("price", val ?? 0)}
        />

        <Textarea
          label="Description"
          value={form.description}
          onChange={(e) => handleChange("description", e.currentTarget.value)}
          autosize
          minRows={3}
        />

        <TextInput
          label="Contact Email"
          value={form.contact_email}
          onChange={(e) => handleChange("contact_email", e.currentTarget.value)}
        />

        <TextInput
          label="Contact Phone"
          value={form.contact_phone}
          onChange={(e) => handleChange("contact_phone", e.currentTarget.value)}
        />

        <TextInput
          label="Available Days"
          value={form.available_days}
          onChange={(e) =>
            handleChange("available_days", e.currentTarget.value)
          }
          placeholder="e.g., Mon-Fri, Weekends"
        />

        <NumberInput
          label="Years of Experience"
          value={form.experience_years}
          onChange={(val) => handleChange("experience_years", val ?? 0)}
        />

        <Textarea
          label="Certifications"
          value={form.certifications}
          onChange={(e) =>
            handleChange("certifications", e.currentTarget.value)
          }
          autosize
          minRows={2}
        />

        <Button mt="md" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
