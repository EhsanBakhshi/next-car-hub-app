import { Car } from "@/types";
import CarCard from "@/components/car-card";

interface CarListProps {
  data: Car[];
}

const CarList = ({ data }: CarListProps) => {
  return (
    <section>
      <div className="home__cars-wrapper">
        {data.map((car, index) => (
          <CarCard key={index} data={car} />
        ))}
      </div>
    </section>
  );
};

export default CarList;
