import { Tabs } from "@mantine/core";
import { useState } from "react";

export default function JobsTabs() {
  const [activeTab, setActiveTab] = useState<string | null>("web");

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="web">Web Design</Tabs.Tab>
        <Tabs.Tab value="education">Education</Tabs.Tab>
        <Tabs.Tab value="custservice">Customer Service</Tabs.Tab>
        <Tabs.Tab value="retail">Retail</Tabs.Tab>
        <Tabs.Tab value="legal">Legal</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="web">Web Design</Tabs.Panel>
      <Tabs.Panel value="education">Education</Tabs.Panel>
      <Tabs.Panel value="custservice">Customer Service</Tabs.Panel>
      <Tabs.Panel value="retail">Retail</Tabs.Panel>
      <Tabs.Panel value="legal">Legal</Tabs.Panel>
    </Tabs>
  );
}
