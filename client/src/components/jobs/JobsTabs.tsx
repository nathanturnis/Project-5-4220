import { Button, Tabs } from "@mantine/core";
import { useState } from "react";
import { Job } from "../../types/job";
import ItemListing from "../ItemListing";
import { Link } from "react-router";

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

      <Tabs.Panel value="web">
        <Button mt="md" component={Link} to="/jobs/new-job">
          New Listing
        </Button>
        <ItemListing<Job> endpoint="/api/jobs/web" />
      </Tabs.Panel>
      <Tabs.Panel value="education">
        <Button mt="md" component={Link} to="/jobs/new-job">
          New Listing
        </Button>
        <ItemListing<Job> endpoint="/api/jobs/education" />
      </Tabs.Panel>
      <Tabs.Panel value="custservice">
        <Button mt="md" component={Link} to="/jobs/new-job">
          New Listing
        </Button>
        <ItemListing<Job> endpoint="/api/jobs/customer-service" />
      </Tabs.Panel>
      <Tabs.Panel value="retail">
        <Button mt="md" component={Link} to="/jobs/new-job">
          New Listing
        </Button>
        <ItemListing<Job> endpoint="/api/jobs/retail" />
      </Tabs.Panel>
      <Tabs.Panel value="legal">
        <Button mt="md" component={Link} to="/jobs/new-job">
          New Listing
        </Button>
        <ItemListing<Job> endpoint="/api/jobs/legal" />
      </Tabs.Panel>
    </Tabs>
  );
}
