import { useEffect, useState } from "react";

// tanstack query

// fetch failed
// fetch loadiong

// standing list design
// standing link

// responsive design

export default function RightSidebar() {
  const [driverStandings, setDriverStandings] = useState([]);

  useEffect(() => {
    getStandings();
  }, []);

  async function getStandings() {
    const standingsReq = await fetch(
      "http://ergast.com/api/f1/current/driverStandings.json",
    );
    const standingsRes = await standingsReq.json();
    setDriverStandings(
      standingsRes.MRData.StandingsTable.StandingsLists[0].DriverStandings.slice(
        0,
        5,
      ),
    );
  }
  return (
    <div className="min-h-full w-full max-w-sm">
      <img src="./imgs/pitlane-logo.png" alt="" />

      {driverStandings.map((driver) => (
        <div>
          <span>
            {driver.Driver.givenName} {driver.Driver.familyName}
          </span>
          <span>{driver.position}</span>
          <span>{driver.points}</span>
          <span>{driver.wins}</span>
        </div>
      ))}
    </div>
  );
}
