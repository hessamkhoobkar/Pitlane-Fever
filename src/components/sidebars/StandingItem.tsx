export default function StandingItem({
  index,
  points,
  driverId,
  givenName,
  familyName,
  constructor,
}: {
  index: number;
  points: string;
  driverId: string;
  givenName: string;
  familyName: string;
  constructor: string;
}) {
  return (
    <div
      className={`relative flex w-full items-center gap-4 bg-platform p-4 ps-2 ${index === 0 ? "h-24 rounded-t-2xl" : "h-16"}`}
    >
      <div className={` ${index === 0 ? "h-16 w-32" : "h-16 w-16"}`}>
        <img
          className={
            index === 0 ? "absolute bottom-0 left-0 h-32 w-32" : "h-16 w-16"
          }
          src={`./imgs/drivers/${driverId}.png`}
          alt={driverId}
        />
      </div>

      <div className="flex grow flex-col">
        <span className="text-lg text-white">
          {givenName} {familyName}
        </span>
        <span className="text-xs text-asphalt-500">{constructor}</span>
      </div>

      <div className="flex grow flex-col items-end">
        <span className="text-lg text-white">{points}</span>
        <span className="text-xs text-asphalt-500">points</span>
      </div>
    </div>
  );
}
