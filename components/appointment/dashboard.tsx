"use client";
import { useEffect, useState } from "react";
import { db, auth } from "../../lib/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

type Appointment = {
  id: string;
  customerName: string;
  phone: string;
  date: string;
  time: string;
  status: string;
};

export default function Dashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filterDate, setFilterDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/login"); // 🔐 redirect if not logged in
      } else {
        setLoading(false); // allow dashboard
      }
    });

    return () => unsubscribe();
  }, []);

 
useEffect(() => {
  const q = query(collection(db, "appointments"), orderBy("date", "desc"));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as any),
    }));

    setAppointments(data);
  });

  // Cleanup listener
  return () => unsubscribe();
}, []);

  const filtered = filterDate
    ? appointments.filter((a) => a.date === filterDate)
    : appointments;

  const total = filtered.length;
  const todayCount = filtered.filter(
    (a) => a.date === new Date().toISOString().split("T")[0]
  ).length;
  const bookedCount = filtered.filter((a) => a.status === "Booked").length;

 if (loading) {
    return <div className="p-6">Checking authentication...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">Appointment Dashboard</h1>

        <button
          onClick={handleLogout}
          className="ml-auto flex items-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-600 shadow-sm transition-colors hover:bg-red-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Logout
        </button>

        <div className="flex items-center gap-3">
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {filterDate && (
            <button
              onClick={() => setFilterDate("")}
              className="rounded-lg bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card title="Total Appointments" value={total} />
        <Card title="Today's Appointments" value={todayCount} />
        <Card title="Booked" value={bookedCount} />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">
          {filterDate ? `Appointments on ${filterDate}` : "All Appointments"}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm">
                <th className="p-3">Patient</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Date</th>
                <th className="p-3">Time</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((a) => (
                <tr key={a.id} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">{a.customerName}</td>
                  <td className="p-3">{a.phone}</td>
                  <td className="p-3">{a.date}</td>
                  <td className="p-3">{a.time}</td>
                  <td className="p-3">
                    <StatusBadge status={a.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-6">
              {filterDate
                ? `No appointments found for ${filterDate}`
                : "No appointments found"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* 🔹 Card Component */
function Card({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
}

/* 🔹 Status Badge */
function StatusBadge({ status }: { status: string }) {
  const colors: any = {
    Booked: "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        colors[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}