import { Tabs } from "@mantine/core";
import { useState } from "react";
import ItemListing from "./ItemListing";
import { Boat } from "../../types/boat";
import { Car } from "../../types/car";

export default function ForSaleTabs() {
  const [activeTab, setActiveTab] = useState<string | null>("cars");

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="cars">Cars + Trucks</Tabs.Tab>
        <Tabs.Tab value="motorcycles">Motorcycles</Tabs.Tab>
        <Tabs.Tab value="boats">Boats</Tabs.Tab>
        <Tabs.Tab value="books">Books</Tabs.Tab>
        <Tabs.Tab value="furniture">Furniture</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="cars">
        <ItemListing<Car> endpoint="/api/cars" />
      </Tabs.Panel>
      <Tabs.Panel value="motorcycles">Motorcycles</Tabs.Panel>
      <Tabs.Panel value="boats">
        <ItemListing<Boat> endpoint="/api/boats" />
      </Tabs.Panel>
      <Tabs.Panel value="books">Books</Tabs.Panel>
      <Tabs.Panel value="furniture">Furniture</Tabs.Panel>
    </Tabs>
  );
}
