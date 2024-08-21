import { useState, useEffect } from "react";
import { callApi } from "./call-api";

interface Hero {
  id: number;
  name: string;
  available: boolean;
}

export const useFetchHeroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroes = async () => {
      setLoading(true);
      try {
        const heroesFetch = await callApi<Hero[]>("heroes");
        setHeroes(heroesFetch);
      } catch (error) {
        setError("Failed to fetch heroes");
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  return { heroes, loading, error, setHeroes };
};