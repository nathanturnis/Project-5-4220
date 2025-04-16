import { Tabs } from "@mantine/core";
import { useState } from "react";

export default function CommunityTabs() {
  const [activeTab, setActiveTab] = useState<string | null>("activites");

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="activites">Activities</Tabs.Tab>
        <Tabs.Tab value="events">Events</Tabs.Tab>
        <Tabs.Tab value="groups">Groups</Tabs.Tab>
        <Tabs.Tab value="rideshare">Rideshare</Tabs.Tab>
        <Tabs.Tab value="volunteers">Volunteers</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="activites">Activites</Tabs.Panel>
      <Tabs.Panel value="events">Events</Tabs.Panel>
      <Tabs.Panel value="groups">Groups</Tabs.Panel>
      <Tabs.Panel value="rideshare">Rideshare</Tabs.Panel>
      <Tabs.Panel value="volunteers">Volunteers</Tabs.Panel>
    </Tabs>
  );
}
