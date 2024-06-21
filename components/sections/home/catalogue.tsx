import { Car, Filter } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";

import CarList from "./car-list";
import CustomFilter from "@/components/custom-filter";
import SearchBar from "@/components/search-bar";
import ShowMore from "@/components/show-more";

interface CatalogueProps {
  cars: Car[];
  searchParams: Filter;
}

const Catalogue = ({ cars, searchParams }: CatalogueProps) => {
  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like.</p>
      </div>

      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title={"fuel"} options={fuels} />
          <CustomFilter title={"year"} options={yearsOfProduction} />
        </div>
      </div>

      {!isDataEmpty ? (
        <>
          <CarList data={cars} />
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > cars.length}
          />
        </>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops! no results</h2>
          <p>There was an error fetching cars.</p>
        </div>
      )}
    </div>
  );
};

export default Catalogue;
