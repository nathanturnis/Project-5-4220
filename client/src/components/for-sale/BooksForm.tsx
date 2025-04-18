import { useState } from "react";
import {
  TextInput,
  NumberInput,
  Textarea,
  Button,
  Stack,
  Box,
  Title,
} from "@mantine/core";
import { Book } from "../../types/book";

export default function BooksForm() {
  const [book, setBook] = useState<Book>({
    id: 0,
    title: "",
    author: "",
    publisher: "",
    published_date: "",
    genre: "",
    pages: undefined,
    price: undefined,
    description: "",
  });

  const handleChange = (
    key: keyof Book,
    value: string | number | undefined
  ) => {
    setBook((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });

      if (!response.ok) throw new Error("Failed to submit");

      const data = await response.json();
      alert(`Book created with ID: ${data.bookId}`);
    } catch (err) {
      console.error(err);
      alert("Error submitting book");
    }
  };

  return (
    <Box maw={600} mt="xl">
      <Title order={2} mb="md">
        Create Book Listing
      </Title>
      <Stack>
        <TextInput
          label="Title"
          value={book.title}
          onChange={(e) => handleChange("title", e.currentTarget.value)}
        />

        <TextInput
          label="Author"
          value={book.author}
          onChange={(e) => handleChange("author", e.currentTarget.value)}
        />

        <TextInput
          label="Publisher"
          value={book.publisher}
          onChange={(e) => handleChange("publisher", e.currentTarget.value)}
        />

        <TextInput
          label="Published Date"
          value={book.published_date}
          onChange={(e) =>
            handleChange("published_date", e.currentTarget.value)
          }
          placeholder="YYYY-MM-DD or Month Year"
        />

        <TextInput
          label="Genre"
          value={book.genre}
          onChange={(e) => handleChange("genre", e.currentTarget.value)}
        />

        <NumberInput
          label="Pages"
          value={book.pages}
          onChange={(val) => handleChange("pages", val ?? undefined)}
        />

        <NumberInput
          label="Price"
          value={book.price}
          onChange={(val) => handleChange("price", val ?? undefined)}
        />

        <Textarea
          label="Description"
          value={book.description}
          onChange={(e) => handleChange("description", e.currentTarget.value)}
          autosize
          minRows={3}
        />

        <Button onClick={handleSubmit} mt="sm">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
