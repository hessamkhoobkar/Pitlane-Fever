import LeftSidebar from "@/components/sidebars/LeftSidebar";
import RightSidebar from "@/components/sidebars/RightSidebar";
import { Outlet } from "react-router-dom"; // Navigate

export default function AppLayout() {
  return (
    <div className="flex min-h-screen w-full pt-4">
      <div className="bg-platform mt-4 grow"></div>
      <div className="flex min-h-full w-full max-w-7xl pt-4">
        <LeftSidebar />
        <div className="bg-platform me-4 min-h-full w-full max-w-3xl rounded-tr-2xl pe-4">
          <div className="-mt-4 w-full">
            <Outlet />
          </div>
        </div>
        <RightSidebar />
      </div>
      <div className="mt-4 grow"></div>
    </div>
  );
}
