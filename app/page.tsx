import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { manufacturers } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { HomeProps } from "@/types";
export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  
const isDataEmpty = !Array.isArray(allCars) ||  allCars.length < 1 || !allCars
  return (
<main className="overflow-hidden"> 
<Hero/>
<div className="mt-12 padding-x padding-y max-width" id="discover">
<div className="home__text-container">
<h1 className="text-4xl font-extrabold">
Car Catalogue
</h1>
<p>
  Explore the cars you might like
</p>
</div>
<div className="home__filters">
<SearchBar/>
</div>
{!isDataEmpty ?(
  <section>
  <div className="home__cars-wrapper">
{allCars?.map((car,id)=>(
  <CarCard car={car} key={id} />
)
)}
  </div>
  </section>
) :(
  <div className="home__error-container">
    <h2 className="text-black text-xl font-bold">
      Oops! No result
    </h2>
    <p>{allCars?.message}</p>
  </div>
)}


</div>
</main>
  );
}
