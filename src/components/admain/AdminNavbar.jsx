// AdminNavbar.jsx
export default function AdminNavbar() {
  return (
    <nav className="h-16 bg-white shadow-soft px-6 flex items-center justify-between">
      <h1 className="text-xl font-bold text-primary">Rennelljkdh lsdho Admin</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm">Admin</span>
        <div className="w-10 h-10 rounded-full bg-primary"></div>
      </div>
    </nav>
  );
}