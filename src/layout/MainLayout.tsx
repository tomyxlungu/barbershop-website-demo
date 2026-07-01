import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}