import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <h1>This is the auth layout</h1>
      <Outlet />
    </div>
  );
}
