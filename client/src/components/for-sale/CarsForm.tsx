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
import { Car } from "../../types/car";

export default function CarsForm() {
  const [car, setCar] = useState<Car>({
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

  const handleChange = (key: keyof Car, value: string | number | undefined) => {
    setCar((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car),
      });

      if (!response.ok) throw new Error("Failed to submit");

      const data = await response.json();
      alert(`Car created with ID: ${data.carId}`);
    } catch (err) {
      console.error(err);
      alert("Error submitting car");
    }
  };

  return (
    <Box maw={600} mt="xl">
      <Title order={2} mb="md">
        Create Car Listing
      </Title>
      <Stack>
        <NumberInput
          label="Year Built"
          value={car.year_built}
          onChange={(val) => handleChange("year_built", val ?? undefined)}
        />

        <TextInput
          label="Make"
          value={car.make}
          onChange={(e) => handleChange("make", e.currentTarget.value)}
        />

        <TextInput
          label="Model"
          value={car.model}
          onChange={(e) => handleChange("model", e.currentTarget.value)}
        />

        <TextInput
          label="Color"
          value={car.color}
          onChange={(e) => handleChange("color", e.currentTarget.value)}
        />

        <TextInput
          label="Type"
          value={car.type}
          onChange={(e) => handleChange("type", e.currentTarget.value)}
        />

        <TextInput
          label="Condition"
          value={car.condition}
          onChange={(e) => handleChange("condition", e.currentTarget.value)}
        />

        <NumberInput
          label="Price"
          value={car.price}
          onChange={(val) => handleChange("price", val ?? undefined)}
        />

        <Textarea
          label="Description"
          value={car.description}
          onChange={(e) => handleChange("description", e.currentTarget.value)}
          autosize
          minRows={3}
        />

        <Button onClick={handleSubmit} mt="sm">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
