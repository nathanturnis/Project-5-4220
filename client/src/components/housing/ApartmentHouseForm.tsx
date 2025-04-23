import { useState } from "react";
import {
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  Box,
  Title,
} from "@mantine/core";
import { ApartmentHouse } from "../../types/apartment_house";

export default function ApartmentHouseForm() {
  const [listing, setListing] = useState<ApartmentHouse>({
    id: 0,
    title: "",
    address: "",
    country: "",
    bedrooms: undefined,
    bathrooms: undefined,
    square_feet: undefined,
    year_built: undefined,
    property_type: "",
    price: undefined,
    lot_size: "",
  });

  const handleChange = (
    key: keyof ApartmentHouse,
    value: string | number | undefined
  ) => {
    setListing((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/apartments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(listing),
      });

      if (!response.ok) throw new Error("Failed to submit");

      const data = await response.json();
      alert(`Listing created with ID: ${data.id}`);
    } catch (err) {
      console.error(err);
      alert("Error submitting listing");
    }
  };

  return (
    <Box maw={600} mt="xl">
      <Title order={2} mb="md">
        Create Apartment/House Listing
      </Title>
      <Stack>
        <Select
          label="Property Type"
          data={[
            { label: "Apartment", value: "APT" },
            { label: "House", value: "HOUSE" },
            { label: "Vacation Rental", value: "VAC" },
            { label: "Townhomes", value: "TOW" },
          ]}
          value={listing.property_type}
          onChange={(val) => handleChange("property_type", val ?? "")}
          placeholder="Select property type"
          required
        />

        <TextInput
          label="Title"
          value={listing.title}
          onChange={(e) => handleChange("title", e.currentTarget.value)}
        />

        <TextInput
          label="Address"
          value={listing.address}
          onChange={(e) => handleChange("address", e.currentTarget.value)}
        />

        <TextInput
          label="Country"
          value={listing.country}
          onChange={(e) => handleChange("country", e.currentTarget.value)}
        />

        <NumberInput
          label="Bedrooms"
          value={listing.bedrooms}
          onChange={(val) => handleChange("bedrooms", val ?? 0)}
        />

        <NumberInput
          label="Bathrooms"
          value={listing.bathrooms}
          onChange={(val) => handleChange("bathrooms", val ?? 0)}
        />

        <NumberInput
          label="Square Feet"
          value={listing.square_feet}
          onChange={(val) => handleChange("square_feet", val ?? 0)}
        />

        <TextInput
          label="Lot Size"
          value={listing.lot_size}
          onChange={(e) => handleChange("lot_size", e.currentTarget.value)}
        />

        <NumberInput
          label="Year Built"
          value={listing.year_built}
          onChange={(val) => handleChange("year_built", val ?? 0)}
        />

        <NumberInput
          label="Price"
          value={listing.price}
          onChange={(val) => handleChange("price", val ?? 0)}
          prefix="$"
        />

        <Button onClick={handleSubmit} mt="sm">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
