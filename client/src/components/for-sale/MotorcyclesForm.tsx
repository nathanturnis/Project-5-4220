import { useState } from "react";
import {
  TextInput,
  NumberInput,
  Textarea,
  Button,
  Stack,
  Box,
  Title,
} from "@mantine/core";
import { Motorcycle } from "../../types/motorcycle";

export default function MotorcyclesForm() {
  const [motorcycle, setMotorcycle] = useState<Motorcycle>({
    id: 0,
    year_built: undefined,
    make: "",
    model: "",
    color: "",
    type: "",
    condition: "",
    price: undefined,
    description: "",
  });

  const handleChange = (
    key: keyof Motorcycle,
    value: string | number | undefined
  ) => {
    setMotorcycle((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/motorcycles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(motorcycle),
      });

      if (!response.ok) throw new Error("Failed to submit");

      const data = await response.json();
      alert(`Motorcycle created with ID: ${data.motorcycleId}`);
    } catch (err) {
      console.error(err);
      alert("Error submitting motorcycle");
    }
  };

  return (
    <Box maw={600} mt="xl">
      <Title order={2} mb="md">
        Create Motorcycle Listing
      </Title>
      <Stack>
        <NumberInput
          label="Year Built"
          value={motorcycle.year_built}
          onChange={(val) => handleChange("year_built", val ?? undefined)}
          required
        />

        <TextInput
          label="Make"
          value={motorcycle.make}
          onChange={(e) => handleChange("make", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Model"
          value={motorcycle.model}
          onChange={(e) => handleChange("model", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Color"
          value={motorcycle.color}
          onChange={(e) => handleChange("color", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Type"
          value={motorcycle.type}
          onChange={(e) => handleChange("type", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Condition"
          value={motorcycle.condition}
          onChange={(e) => handleChange("condition", e.currentTarget.value)}
          required
        />

        <NumberInput
          label="Price"
          value={motorcycle.price}
          onChange={(val) => handleChange("price", val ?? undefined)}
          required
        />

        <Textarea
          label="Description"
          value={motorcycle.description}
          onChange={(e) => handleChange("description", e.currentTarget.value)}
          autosize
          minRows={3}
          required
        />

        <Button onClick={handleSubmit} mt="sm">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
