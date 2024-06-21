"use client";

import Button from "@/components/ui/button";
import { updateSearchParams } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", newLimit.toString());
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          type={"button"}
          className="bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        >
          Show More
        </Button>
      )}
    </div>
  );
};

export default ShowMore;
