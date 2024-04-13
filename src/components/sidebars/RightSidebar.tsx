import { useQuery } from "@tanstack/react-query";

import Standings from "./Standings";

// fetch failed
// standing link animation
// responsive design

export default function RightSidebar() {
  const { data, status } = useQuery({
    queryKey: ["DriverStandings"],
    queryFn: async () => {
      const standingsReq = await fetch(
        "http://ergast.com/api/f1/current/driverStandings.json",
      );
      const standingsRes = await standingsReq.json();
      return standingsRes.MRData.StandingsTable.StandingsLists[0].DriverStandings.slice(
        0,
        5,
      );
    },
  });

  return (
    <div className="min-h-full w-full max-w-sm">
      <img src="./imgs/pitlane-logo.png" alt="" />
      <Standings data={data} status={status} />
    </div>
  );
}
