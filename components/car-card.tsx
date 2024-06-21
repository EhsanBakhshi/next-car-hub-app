"use client";

import { calculateCarRent, generateCarImageUrl } from "@/lib/utils";

import Button from "@/components/ui/button";
import { Car } from "@/types";
import CarModal from "./modals/car-modal";
import Image from "next/image";
import { useState } from "react";

interface CarCardProps {
  data: Car;
}

const CarCard = ({ data }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = data;

  const carRent = calculateCarRent(city_mpg, year);

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(data, "01")}
          alt={"car-image"}
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              alt={"steering-wheel"}
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} alt={"tire"} width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} alt={"gas"} width={20} height={20} />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <Button
            className="custom-btn w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold"
            onClick={() => setOpen(true)}
          >
            <span className="flex-1">View More</span>
            <div className="relative w-6 h-6">
              <Image
                src={"/right-arrow.svg"}
                alt={"right-icon"}
                fill
                className="object-contain"
              />
            </div>
          </Button>
        </div>
      </div>

      <CarModal open={open} closeModal={() => setOpen(false)} data={data} />
    </div>
  );
};

export default CarCard;
