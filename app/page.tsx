import { Catalogue, Hero } from "@/components/sections/home";

import { Filter } from "@/types";
import { fetchCars } from "@/lib/utils";

export default async function Home({ searchParams }: { searchParams: Filter }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  return (
    <main className="overflow-hidden">
      <Hero />
      <Catalogue cars={allCars} searchParams={searchParams} />
    </main>
  );
}
