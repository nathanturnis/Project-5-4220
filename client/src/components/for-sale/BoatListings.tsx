import { useEffect, useState } from "react";
import { Boat } from "../../types/boat";
import { Paper, SimpleGrid } from "@mantine/core";

export default function BoatListings() {
  const [boats, setBoats] = useState<Boat[]>([]);

  useEffect(() => {
    fetch("/api/boats")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setBoats(data));
  }, []);

  return (
    <SimpleGrid cols={4} mt="lg">
      {boats.map((boat) => (
        <Paper withBorder shadow="xs" pt="xs" pb="xs" p="md">
          {Object.entries(boat).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value ?? "N/A"}
            </div>
          ))}
        </Paper>
      ))}
    </SimpleGrid>
  );
}
