import { Tabs } from "@mantine/core";
import { useState } from "react";

export default function ForSaleTabs() {
  const [activeTab, setActiveTab] = useState<string | null>("cars");

  // const [boats, setBoats] = useState([]);

  // useEffect(() => {
  //   fetch("/api/boats")
  //     .then((res) => {
  //       if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  //       return res.json();
  //     })
  //     .then((data) => setBoats(data));
  // }, []);

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="cars">Cars + Trucks</Tabs.Tab>
        <Tabs.Tab value="motorcycles">Motorcycles</Tabs.Tab>
        <Tabs.Tab value="boats">Boats</Tabs.Tab>
        <Tabs.Tab value="books">Books</Tabs.Tab>
        <Tabs.Tab value="furniture">Furniture</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="cars">Cars</Tabs.Panel>
      <Tabs.Panel value="motorcycles">Motorcycles</Tabs.Panel>
      <Tabs.Panel value="boats">Boats</Tabs.Panel>
      <Tabs.Panel value="books">Books</Tabs.Panel>
      <Tabs.Panel value="furniture">Furniture</Tabs.Panel>
    </Tabs>
  );
}
