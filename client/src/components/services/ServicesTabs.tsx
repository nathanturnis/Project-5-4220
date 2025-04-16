import { Tabs } from "@mantine/core";
import { useState } from "react";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState<string | null>("pet");

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="pet">Pet</Tabs.Tab>
        <Tabs.Tab value="cleaning">Cleaning</Tabs.Tab>
        <Tabs.Tab value="financial">Financial</Tabs.Tab>
        <Tabs.Tab value="computer">Computer</Tabs.Tab>
        <Tabs.Tab value="automotive">Automotive</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="pet">Pet</Tabs.Panel>
      <Tabs.Panel value="cleaning">Cleaning</Tabs.Panel>
      <Tabs.Panel value="financial">Financial</Tabs.Panel>
      <Tabs.Panel value="computer">Computer</Tabs.Panel>
      <Tabs.Panel value="automotive">Automotive</Tabs.Panel>
    </Tabs>
  );
}
