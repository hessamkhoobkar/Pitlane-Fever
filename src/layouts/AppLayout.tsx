import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"; // Navigate

export default function AppLayout() {
  return (
    <div>
      <h1>This is the app layout</h1>
      <Link to="/">home</Link>
      <Link to="/standings/drivers">Drivers standings</Link>
      <Link to="/standings/constructors">Constructors standingse</Link>
      <Outlet />
    </div>
  );
}
