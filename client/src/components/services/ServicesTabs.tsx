import { Button, Tabs } from "@mantine/core";
import { useState } from "react";
import ItemListing from "../ItemListing";
import { ServiceListing } from "../../types/service";
import { Link } from "react-router";
import { useAuth } from "../AuthContext";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState<string | null>("pet");
  const { isLoggedIn } = useAuth();

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="pet">Pet</Tabs.Tab>
        <Tabs.Tab value="cleaning">Cleaning</Tabs.Tab>
        <Tabs.Tab value="financial">Financial</Tabs.Tab>
        <Tabs.Tab value="computer">Computer</Tabs.Tab>
        <Tabs.Tab value="automotive">Automotive</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="pet">
        <Button
          mt="md"
          component={Link}
          to="/services/new"
          display={!isLoggedIn ? "none" : ""}>
          New Listing
        </Button>
        <ItemListing<ServiceListing> endpoint="/api/services?category=PET" />
      </Tabs.Panel>
      <Tabs.Panel value="cleaning">
        <Button
          mt="md"
          component={Link}
          to="/services/new"
          display={!isLoggedIn ? "none" : ""}>
          New Listing
        </Button>
        <ItemListing<ServiceListing> endpoint="/api/services?category=CLEAN" />
      </Tabs.Panel>
      <Tabs.Panel value="financial">
        <Button
          mt="md"
          component={Link}
          to="/services/new"
          display={!isLoggedIn ? "none" : ""}>
          New Listing
        </Button>
        <ItemListing<ServiceListing> endpoint="/api/services?category=FIN" />
      </Tabs.Panel>
      <Tabs.Panel value="computer">
        <Button
          mt="md"
          component={Link}
          to="/services/new"
          display={!isLoggedIn ? "none" : ""}>
          New Listing
        </Button>
        <ItemListing<ServiceListing> endpoint="/api/services?category=COMP" />
      </Tabs.Panel>
      <Tabs.Panel value="automotive">
        <Button
          mt="md"
          component={Link}
          to="/services/new"
          display={!isLoggedIn ? "none" : ""}>
          New Listing
        </Button>
        <ItemListing<ServiceListing> endpoint="/api/services?category=AUTO" />
      </Tabs.Panel>
    </Tabs>
  );
}
