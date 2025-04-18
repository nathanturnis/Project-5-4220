import { Container, Select, Title } from "@mantine/core";
import JobsForm from "./jobs/JobsForm";
import { useState } from "react";

interface OutputFormProps {
  section: string | null;
}

const OutputForm = (props: OutputFormProps) => {
  switch (props.section) {
    case "jobs":
      return <JobsForm />;
  }
};

export default function NewListing() {
  const [sectionValue, setSectionValue] = useState<string | null>("");

  return (
    <Container>
      <Title order={3} mb="lg">
        New Listing
      </Title>

      <Select
        label="Section"
        placeholder="Pick a section"
        data={[
          { value: "for_sale", label: "For Sale" },
          { value: "housing", label: "Housing" },
          { value: "services", label: "Services" },
          { value: "jobs", label: "Jobs" },
          { value: "community", label: "Community" },
        ]}
        value={sectionValue}
        onChange={setSectionValue}
      />

      {<OutputForm section={sectionValue} />}
    </Container>
  );
}
