import {
  faBriefcase,
  faConciergeBell,
  faHouse,
  faSignHanging,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppShell, Burger, Button, Group, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet, useLocation } from "react-router";

export default function Layout() {
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      navbar={{ width: 250, breakpoint: "sm", collapsed: { mobile: !opened } }}>
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="lg">
        <Button mb="lg">New Listing</Button>
        <NavLink
          label="For Sale"
          component={Link}
          to="/"
          active={location.pathname === "/"}
          leftSection={<FontAwesomeIcon icon={faSignHanging} />}
          styles={{
            root: {
              borderRadius: "6px",
            },
          }}
        />
        <NavLink
          label="Housing"
          component={Link}
          to="/housing"
          active={location.pathname.startsWith("/housing")}
          leftSection={<FontAwesomeIcon icon={faHouse} />}
          styles={{
            root: {
              borderRadius: "6px",
            },
          }}
        />
        <NavLink
          label="Services"
          component={Link}
          to="/services"
          active={location.pathname.startsWith("/services")}
          leftSection={<FontAwesomeIcon icon={faConciergeBell} />}
          styles={{
            root: {
              borderRadius: "6px",
            },
          }}
        />
        <NavLink
          label="Jobs"
          component={Link}
          to="/jobs"
          active={location.pathname.startsWith("/jobs")}
          leftSection={<FontAwesomeIcon icon={faBriefcase} />}
          styles={{
            root: {
              borderRadius: "6px",
            },
          }}
        />
        <NavLink
          label="Community"
          component={Link}
          to="/community"
          active={location.pathname.startsWith("/community")}
          leftSection={<FontAwesomeIcon width={16} icon={faUserGroup} />}
          styles={{
            root: {
              borderRadius: "6px",
            },
          }}
        />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
