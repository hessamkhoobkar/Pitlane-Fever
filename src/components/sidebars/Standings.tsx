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
        <div className="relative flex h-80 w-full flex-col items-center justify-center gap-4 rounded-t-2xl bg-platform bg-gradient-to-tr from-primary/20 to-platform p-4">
          <Icon
            className="text-5xl text-primary"
            icon="solar:slash-square-broken"
          />
          <p className="text-xl">Failed to fetch</p>
          <p className="mb-10 text-center text-sm">
            It seems that the server is not responding or there was an error in
            retrieving the standings data.
          </p>
        </div>
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
        className="group flex h-12 w-full items-center justify-center gap-4 rounded-b-2xl bg-platform p-4 text-sm font-normal transition-all duration-200 ease-in-out hover:bg-[#E10600] hover:text-[#FFF0F0]"
      >
        <span className="translate-x-4 transition-all duration-300 ease-in-out group-hover:translate-x-0">
          View standings
        </span>
        <Icon
          className="text-2xl opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
          icon="solar:arrow-right-broken"
        />
      </Link>
    </div>
  );
}
