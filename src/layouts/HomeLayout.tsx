// layouts/AuthLayout.tsx
import { Outlet } from "react-router-dom";
import { Header } from "../components/common/Header";
import SideBar from "../components/common/SideBar";

export const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
