import { Link } from "react-router-dom";

export default function LeftSidebar() {
  return (
    <div className="bg-platform min-h-full grow">
      <div className="flex flex-col">
        <Link to="/">home</Link>
        <Link to="/standings/drivers">Drivers standings</Link>
        <Link to="/standings/constructors">Constructors standingse</Link>
      </div>
    </div>
  );
}
