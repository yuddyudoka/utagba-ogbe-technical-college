import { useEffect, useState } from "react";
import { programmes as fallbackProgrammes, type Programme } from "./programmes";

let cachedProgrammes: Programme[] | null = null;

export function useProgrammes() {
  const [programmes, setProgrammes] = useState<Programme[]>(
    cachedProgrammes || fallbackProgrammes,
  );

  useEffect(() => {
    let active = true;

    fetch("/api/programmes")
      .then((response) => {
        if (!response.ok) throw new Error("CMS unavailable");
        return response.json();
      })
      .then((result) => {
        if (active && Array.isArray(result.programmes)) {
          cachedProgrammes = result.programmes;
          setProgrammes(result.programmes);
        }
      })
      .catch(() => {
        // The bundled programme data remains available as a reliable fallback.
      });

    return () => {
      active = false;
    };
  }, []);

  return programmes;
}

export function findProgramme(programmes: Programme[], slug: string) {
  return programmes.find((programme) => programme.slug === slug);
}

export function findOtherProgrammes(
  programmes: Programme[],
  slug: string,
  count = 3,
) {
  const currentIndex = programmes.findIndex((programme) => programme.slug === slug);
  if (currentIndex === -1) return programmes.slice(0, count);

  return Array.from(
    { length: Math.min(count, programmes.length - 1) },
    (_, offset) => programmes[(currentIndex + offset + 1) % programmes.length],
  );
}
