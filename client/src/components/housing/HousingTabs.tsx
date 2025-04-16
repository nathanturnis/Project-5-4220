import { Tabs } from "@mantine/core";
import { useState } from "react";

export default function HousingTabs() {
  const [activeTab, setActiveTab] = useState<string | null>("apts");

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="apts">Apartments</Tabs.Tab>
        <Tabs.Tab value="houses">Houses</Tabs.Tab>
        <Tabs.Tab value="commercial">Commercial</Tabs.Tab>
        <Tabs.Tab value="parking">Parking</Tabs.Tab>
        <Tabs.Tab value="vacation">Vacation Rentals</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="apts">Apartments</Tabs.Panel>
      <Tabs.Panel value="houses">Houses</Tabs.Panel>
      <Tabs.Panel value="commercial">Commercial</Tabs.Panel>
      <Tabs.Panel value="parking">Parking</Tabs.Panel>
      <Tabs.Panel value="vacation">Vacation</Tabs.Panel>
    </Tabs>
  );
}
