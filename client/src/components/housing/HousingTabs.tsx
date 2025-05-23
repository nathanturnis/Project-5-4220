import { Button, Tabs } from "@mantine/core";
import { useState } from "react";
import ItemListing from "../ItemListing";
import { ApartmentHouse } from "../../types/apartment_house";
import { Link } from "react-router";
import { CommercialProperty } from "../../types/commerical_property";
import { useAuth } from "../AuthContext";

export default function HousingTabs() {
  const [activeTab, setActiveTab] = useState<string | null>("apts");
  const { isLoggedIn } = useAuth();

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="apts">Apartments</Tabs.Tab>
        <Tabs.Tab value="houses">Houses</Tabs.Tab>
        <Tabs.Tab value="commercial">Commercial</Tabs.Tab>
        <Tabs.Tab value="townhomes">Townhomes</Tabs.Tab>
        <Tabs.Tab value="vacation">Vacation Rentals</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="apts">
        <Button
          mt="md"
          component={Link}
          to="/housing/new-apt-house"
          display={!isLoggedIn ? "none" : ""}>
          New Listing
        </Button>
        <ItemListing<ApartmentHouse> endpoint="/api/apartments" />
      </Tabs.Panel>
      <Tabs.Panel value="houses">
        <Button
          mt="md"
          component={Link}
          to="/housing/new-apt-house"
          display={!isLoggedIn ? "none" : ""}>
          New Listing
        </Button>
        <ItemListing<ApartmentHouse> endpoint="/api/houses" />
      </Tabs.Panel>
      <Tabs.Panel value="commercial">
        <Button
          mt="md"
          component={Link}
          to="/housing/new-commercial"
          display={!isLoggedIn ? "none" : ""}>
          New Commerical Property
        </Button>
        <ItemListing<CommercialProperty> endpoint="/api/commercial-properties" />
      </Tabs.Panel>
      <Tabs.Panel value="townhomes">
        <Button
          mt="md"
          component={Link}
          to="/housing/new-apt-house"
          display={!isLoggedIn ? "none" : ""}>
          New Listing
        </Button>
        <ItemListing<ApartmentHouse> endpoint="/api/townhomes" />
      </Tabs.Panel>
      <Tabs.Panel value="vacation">
        <Button
          mt="md"
          component={Link}
          to="/housing/new-apt-house"
          display={!isLoggedIn ? "none" : ""}>
          New Listing
        </Button>
        <ItemListing<ApartmentHouse> endpoint="/api/vacation" />
      </Tabs.Panel>
    </Tabs>
  );
}
