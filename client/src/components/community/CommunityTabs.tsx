import { Button, Tabs } from "@mantine/core";
import { useState } from "react";
import { CommunityListing } from "../../types/community";
import ItemListing from "../ItemListing";
import { Link } from "react-router";

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

      <Tabs.Panel value="activites">
        <Button mt="md" component={Link} to="/community/new">
          New Listing
        </Button>
        <ItemListing<CommunityListing> endpoint="/api/community?category=activities" />
      </Tabs.Panel>
      <Tabs.Panel value="events">
        <Button mt="md" component={Link} to="/community/new">
          New Listing
        </Button>
        <ItemListing<CommunityListing> endpoint="/api/community?category=events" />
      </Tabs.Panel>
      <Tabs.Panel value="groups">
        <Button mt="md" component={Link} to="/community/new">
          New Listing
        </Button>
        <ItemListing<CommunityListing> endpoint="/api/community?category=groups" />
      </Tabs.Panel>
      <Tabs.Panel value="rideshare">
        <Button mt="md" component={Link} to="/community/new">
          New Listing
        </Button>
        <ItemListing<CommunityListing> endpoint="/api/community?category=rideshare" />
      </Tabs.Panel>
      <Tabs.Panel value="volunteers">
        <Button mt="md" component={Link} to="/community/new">
          New Listing
        </Button>
        <ItemListing<CommunityListing> endpoint="/api/community?category=volunteers" />
      </Tabs.Panel>
    </Tabs>
  );
}
