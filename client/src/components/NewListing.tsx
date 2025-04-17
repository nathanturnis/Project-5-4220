import { Container, Select, Title } from "@mantine/core";

export default function NewListing() {
  return (
    <Container>
      <Title order={3} mb="lg">
        New Listing
      </Title>

      <Select label="Section" placeholder="Pick a section" />
    </Container>
  );
}
