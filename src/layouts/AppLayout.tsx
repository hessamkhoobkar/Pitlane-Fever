import { Outlet } from "react-router-dom"; // Navigate

export default function AppLayout() {
  return (
    <div>
      <h1>This is the app layout</h1>
      <Outlet />
    </div>
  );
}
