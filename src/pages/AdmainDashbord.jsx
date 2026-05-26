import React from "react";

export default function AdminDashboard() {
  return (
    <div className="bg-secondary min-h-screen">
      {/* Navbar */}
      <div className="bg-white shadow-soft px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Rennello Admin</h1>

        <div className="flex gap-6 items-center">
          <span className="cursor-pointer">Dashboard</span>
          <span className="cursor-pointer">Users</span>
          <span className="cursor-pointer">Workshops</span>
          <span className="cursor-pointer">Requests</span>
          <span className="cursor-pointer">Reports</span>

          <div className="w-10 h-10 rounded-full bg-gray-300" />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Welcome */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold">Admin Dashboard</h2>
          <p className="text-secondary_font">
            Monitor and manage the platform بسهولة
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { title: "Users", value: 120 },
            { title: "Workshops", value: 45 },
            { title: "Requests", value: 18 },
            { title: "Reports", value: 6 },
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl2 shadow-soft">
              <p className="text-secondary_font">{item.title}</p>
              <h3 className="text-2xl font-bold">{item.value}</h3>
            </div>
          ))}
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="col-span-2 flex flex-col gap-6">
            {/* Requests */}
            <div className="bg-white p-5 rounded-xl2 shadow-soft">
              <h3 className="font-bold mb-4">Recent Requests</h3>

              <div className="flex flex-col gap-4">
                {[1, 2].map((_, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-secondary p-4 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">Fix AC issue</p>
                      <p className="text-sm text-secondary_font">
                        Customer: Alex
                      </p>
                    </div>

                    <button className="bg-primary text-white px-4 py-2 rounded-lg">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Reports */}
            <div className="bg-white p-5 rounded-xl2 shadow-soft">
              <h3 className="font-bold mb-4">Reports</h3>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center bg-secondary p-4 rounded-lg">
                  <div>
                    <p className="font-medium">Workshop Issue</p>
                    <p className="text-sm text-secondary_font">
                      Reported by Sara
                    </p>
                  </div>

                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                    Review
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            {/* Pending Workshops */}
            <div className="bg-white p-5 rounded-xl2 shadow-soft">
              <h3 className="font-bold mb-4">Pending Workshops</h3>

              <div className="flex flex-col gap-4">
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="font-medium">Wood Studio</p>
                  <div className="flex gap-2 mt-2">
                    <button className="bg-primary text-white px-3 py-1 rounded">
                      Approve
                    </button>
                    <button className="bg-gray-300 px-3 py-1 rounded">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity */}
            <div className="bg-white p-5 rounded-xl2 shadow-soft">
              <h3 className="font-bold mb-4">Activity</h3>

              <ul className="text-sm text-secondary_font flex flex-col gap-2">
                <li>New user registered</li>
                <li>Workshop approved</li>
                <li>Report submitted</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
