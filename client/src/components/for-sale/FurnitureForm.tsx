import { useState } from "react";
import {
  TextInput,
  NumberInput,
  Button,
  Stack,
  Box,
  Title,
} from "@mantine/core";
import { Furniture } from "../../types/furniture"; // Adjust import as needed

export default function FurnitureForm() {
  const [furniture, setFurniture] = useState<Furniture>({
    id: 0,
    name: "",
    type: "",
    material: "",
    color: "",
    dimensions: "",
    weight: undefined,
    price: undefined,
    condition: "",
  });

  const handleChange = (
    key: keyof Furniture,
    value: string | number | undefined
  ) => {
    setFurniture((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/furniture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(furniture),
      });

      if (!response.ok) throw new Error("Failed to submit");

      const data = await response.json();
      alert(`Furniture created with ID: ${data.furnitureId}`);
    } catch (err) {
      console.error(err);
      alert("Error submitting furniture");
    }
  };

  return (
    <Box maw={600} mt="xl">
      <Title order={2} mb="md">
        Create Furniture Listing
      </Title>
      <Stack>
        <TextInput
          label="Name"
          value={furniture.name}
          onChange={(e) => handleChange("name", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Type"
          value={furniture.type}
          onChange={(e) => handleChange("type", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Material"
          value={furniture.material}
          onChange={(e) => handleChange("material", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Color"
          value={furniture.color}
          onChange={(e) => handleChange("color", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Dimensions"
          value={furniture.dimensions}
          onChange={(e) => handleChange("dimensions", e.currentTarget.value)}
          required
        />

        <NumberInput
          label="Weight (lbs)"
          value={furniture.weight}
          onChange={(val) => handleChange("weight", val ?? undefined)}
          required
        />

        <NumberInput
          label="Price"
          value={furniture.price}
          onChange={(val) => handleChange("price", val ?? undefined)}
          required
        />

        <TextInput
          label="Condition"
          value={furniture.condition}
          onChange={(e) => handleChange("condition", e.currentTarget.value)}
          required
        />

        <Button onClick={handleSubmit} mt="sm">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
