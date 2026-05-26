import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/admain/AdminNavbar";
import AdminSidebar from "../components/admain/AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-secondary">
      <AdminNavbar />

      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}