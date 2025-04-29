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
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { useAuth } from "./components/AuthContext";

export default function Layout() {
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

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

        {isLoggedIn ? (
          <Button
            variant="filled"
            color="red"
            mt={"auto"}
            onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button component={Link} to="/login" mt={"auto"}>
            Login / Register
          </Button>
        )}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
