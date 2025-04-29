import { Button, Tabs } from "@mantine/core";
import { useState } from "react";
import ItemListing from "../ItemListing";
import { Boat } from "../../types/boat";
import { Car } from "../../types/car";
import { Motorcycle } from "../../types/motorcycle";
import { Book } from "../../types/book";
import { Furniture } from "../../types/furniture";
import { Link } from "react-router";
import { useAuth } from "../AuthContext";

export default function ForSaleTabs() {
  const [activeTab, setActiveTab] = useState<string | null>("cars");
  const { isLoggedIn } = useAuth();

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
        <Button
          mt="md"
          component={Link}
          to="/new-car"
          display={!isLoggedIn ? "none" : ""}>
          New Car Listing
        </Button>
        <ItemListing<Car> endpoint="/api/cars" />
      </Tabs.Panel>
      <Tabs.Panel value="motorcycles">
        <Button
          mt="md"
          component={Link}
          to="/new-motorcycle"
          display={!isLoggedIn ? "none" : ""}>
          New Motorcycle Listing
        </Button>
        <ItemListing<Motorcycle> endpoint="/api/motorcycles" />
      </Tabs.Panel>
      <Tabs.Panel value="boats">
        <Button
          mt="md"
          component={Link}
          to="/new-boat"
          display={!isLoggedIn ? "none" : ""}>
          New Boat Listing
        </Button>
        <ItemListing<Boat> endpoint="/api/boats" />
      </Tabs.Panel>
      <Tabs.Panel value="books">
        <Button
          mt="md"
          component={Link}
          to="/new-book"
          display={!isLoggedIn ? "none" : ""}>
          New Book Listing
        </Button>
        <ItemListing<Book> endpoint="/api/books" />
      </Tabs.Panel>
      <Tabs.Panel value="furniture">
        <Button
          mt="md"
          component={Link}
          to="/new-furniture"
          display={!isLoggedIn ? "none" : ""}>
          New Furniture Listing
        </Button>
        <ItemListing<Furniture> endpoint="/api/furniture" />
      </Tabs.Panel>
    </Tabs>
  );
}
