import { useEffect, useState } from "react";
import { SimpleGrid, Paper } from "@mantine/core"; // assuming you're using Mantine

type ObjectWithId = { id: number }; // minimal requirement for mapping with `key`

export default function ItemListing<T extends ObjectWithId>({
  endpoint,
}: {
  endpoint: string;
}) {
  const [items, setItems] = useState<T[]>([]);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setItems(data));
  }, [endpoint]);

  return (
    <SimpleGrid cols={4} mt="lg">
      {items.map((item) => (
        <Paper key={item.id} withBorder shadow="xs" pt="xs" pb="xs" p="md">
          {Object.entries(item).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value ?? "N/A"}
            </div>
          ))}
        </Paper>
      ))}
    </SimpleGrid>
  );
}
