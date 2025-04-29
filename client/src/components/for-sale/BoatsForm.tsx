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
import { Boat } from "../../types/boat";

export default function BoatsForm() {
  const [boat, setBoat] = useState<Boat>({
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
    key: keyof Boat,
    value: string | number | undefined
  ) => {
    setBoat((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/boats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(boat),
      });

      if (!response.ok) throw new Error("Failed to submit");

      const data = await response.json();
      alert(`Boat created with ID: ${data.boatId}`);
    } catch (err) {
      console.error(err);
      alert("Error submitting boat");
    }
  };

  return (
    <Box maw={600} mt="xl">
      <Title order={2} mb="md">
        Create Boat Listing
      </Title>
      <Stack>
        <NumberInput
          label="Year Built"
          value={boat.year_built}
          onChange={(val) => handleChange("year_built", val ?? undefined)}
          required
        />

        <TextInput
          label="Make"
          value={boat.make}
          onChange={(e) => handleChange("make", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Model"
          value={boat.model}
          onChange={(e) => handleChange("model", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Color"
          value={boat.color}
          onChange={(e) => handleChange("color", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Type"
          value={boat.type}
          onChange={(e) => handleChange("type", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Condition"
          value={boat.condition}
          onChange={(e) => handleChange("condition", e.currentTarget.value)}
          required
        />

        <NumberInput
          label="Price"
          value={boat.price}
          onChange={(val) => handleChange("price", val ?? undefined)}
          required
        />

        <Textarea
          label="Description"
          value={boat.description}
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
