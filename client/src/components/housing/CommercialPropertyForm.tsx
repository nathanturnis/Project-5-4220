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
import { CommercialProperty } from "../../types/commerical_property"; // adjust the path as needed

export default function CommercialPropertyForm() {
  const [property, setProperty] = useState<CommercialProperty>({
    id: 0,
    title: "",
    address: "",
    country: "",
    lot_size: "",
    year_built: undefined,
    zoning_type: "",
    parking_spaces: undefined,
    price: undefined,
    description: "",
  });

  const handleChange = (
    key: keyof CommercialProperty,
    value: string | number | undefined
  ) => {
    setProperty((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/commercial-properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(property),
      });

      if (!response.ok) throw new Error("Failed to submit");

      const data = await response.json();
      alert(`Property created with ID: ${data.id}`);
    } catch (err) {
      console.error(err);
      alert("Error submitting property");
    }
  };

  return (
    <Box maw={600} mt="xl">
      <Title order={2} mb="md">
        Add Commercial Property
      </Title>
      <Stack>
        <TextInput
          label="Title"
          value={property.title}
          onChange={(e) => handleChange("title", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Address"
          value={property.address}
          onChange={(e) => handleChange("address", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Country"
          value={property.country}
          onChange={(e) => handleChange("country", e.currentTarget.value)}
          required
        />

        <TextInput
          label="Lot Size"
          placeholder="e.g. 5000 sq ft or 1 acre"
          value={property.lot_size}
          onChange={(e) => handleChange("lot_size", e.currentTarget.value)}
          required
        />

        <NumberInput
          label="Year Built"
          value={property.year_built}
          onChange={(val) => handleChange("year_built", val ?? 0)}
          required
        />

        <TextInput
          label="Zoning Type"
          placeholder="e.g. Commercial, Mixed-use"
          value={property.zoning_type}
          onChange={(e) => handleChange("zoning_type", e.currentTarget.value)}
          required
        />

        <NumberInput
          label="Parking Spaces"
          value={property.parking_spaces}
          onChange={(val) => handleChange("parking_spaces", val ?? 0)}
          required
        />

        <NumberInput
          label="Price"
          value={property.price}
          onChange={(val) => handleChange("price", val ?? 0)}
          required
        />

        <Textarea
          label="Description"
          value={property.description}
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
