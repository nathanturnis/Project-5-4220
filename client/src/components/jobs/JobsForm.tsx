import { useState } from "react";
import {
  TextInput,
  NumberInput,
  Textarea,
  Select,
  Button,
  Stack,
  Box,
  Title,
} from "@mantine/core";
import { Job } from "./../../types/job";

export default function JobsForm() {
  const [job, setJob] = useState<Job>({
    id: 0,
    title: "",
    company: "",
    location: "",
    employment_type: "",
    salary: undefined,
    description: "",
    level: "",
    job_type: "",
  });

  const handleChange = (key: keyof Job, value: string | number | undefined) => {
    setJob((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(job),
      });

      if (!response.ok) throw new Error("Failed to submit");

      const data = await response.json();
      alert(`Job created with ID: ${data.jobId}`);
    } catch (err) {
      console.error(err);
      alert("Error submitting job");
    }
  };

  return (
    <Box maw={600} mt="xl">
      <Title order={2} mb="md">
        Create Job Listing
      </Title>
      <Stack>
        <Select
          label="Job Type"
          data={[
            { label: "Web Design", value: "WEB" },
            { label: "Education", value: "EDU" },
            { label: "Customer Service", value: "CUS" },
            { label: "Retail", value: "RET" },
            { label: "Legal", value: "LAW" },
          ]}
          value={job.job_type}
          onChange={(val) => handleChange("job_type", val ?? "")}
          placeholder="Select job type"
          clearable
        />

        <TextInput
          label="Job Title"
          value={job.title}
          onChange={(e) => handleChange("title", e.currentTarget.value)}
        />

        <TextInput
          label="Company"
          value={job.company}
          onChange={(e) => handleChange("company", e.currentTarget.value)}
        />

        <TextInput
          label="Location"
          value={job.location}
          onChange={(e) => handleChange("location", e.currentTarget.value)}
        />

        <Select
          label="Employment Type"
          data={["Full-time", "Part-time", "Contract", "Internship"]}
          value={job.employment_type}
          onChange={(val) => handleChange("employment_type", val ?? "")}
          placeholder="Select type"
          clearable
        />

        <NumberInput
          label="Salary"
          value={job.salary}
          onChange={(val) => handleChange("salary", val ?? 0)}
        />

        <Textarea
          label="Description"
          value={job.description}
          onChange={(e) => handleChange("description", e.currentTarget.value)}
          autosize
          minRows={3}
        />

        <Select
          label="Level"
          data={["Entry", "Mid", "Senior", "Lead"]}
          value={job.level}
          onChange={(val) => handleChange("level", val ?? "")}
          placeholder="Select level"
          clearable
        />

        <Button onClick={handleSubmit} mt="sm">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
