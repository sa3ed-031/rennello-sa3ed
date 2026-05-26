import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="w-64 min-h-[calc(100vh-64px)] bg-white shadow-soft p-5 hidden md:block">
      <ul className="flex flex-col gap-4">
        <li>
          <Link to="/admin" className="font-medium text-primary">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/admin/users" className="font-medium text-gray-700">
            Users
          </Link>
        </li>

        <li>
          <Link to="/admin/workshops" className="font-medium text-gray-700">
            Workshops
          </Link>
        </li>

        <li>
          <Link to="/admin/requests" className="font-medium text-gray-700">
            Requests
          </Link>
        </li>

        <li>
          <Link to="/admin/reports" className="font-medium text-gray-700">
            Reports
          </Link>
        </li>
      </ul>
    </aside>
  );
}