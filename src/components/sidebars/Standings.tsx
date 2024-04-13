import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import StandingItem from "@/components/sidebars/StandingItem";
import StandingItemSkeleton from "./StandingItemSkeleton";

interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export default function Standings({
  data,
  status,
}: {
  data: DriverStanding[];
  status: "pending" | "error" | "success";
}) {
  return (
    <div className="mt-12 flex w-full flex-col gap-1">
      {status === "pending" ? (
        Array.from(Array(5), (_, index) => (
          <StandingItemSkeleton key={index} index={index} />
        ))
      ) : status === "error" ? (
        <p>Error</p>
      ) : (
        data.map((driver: DriverStanding, index: number) => (
          <StandingItem
            index={index}
            points={driver.points}
            key={driver.Driver.driverId}
            driverId={driver.Driver.driverId}
            givenName={driver.Driver.givenName}
            familyName={driver.Driver.familyName}
            constructor={driver.Constructors[0].name}
          />
        ))
      )}
      <Link
        to="/standings/drivers"
        className="flex h-12 w-full items-center justify-center gap-4 rounded-b-2xl bg-platform p-4 text-sm font-normal transition-all duration-200 ease-in-out hover:bg-[#E10600] hover:text-[#FFF0F0]"
      >
        <span>View standings</span>
        <Icon className="text-2xl" icon="solar:arrow-right-broken" />
      </Link>
    </div>
  );
}
