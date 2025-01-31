import React from "react";
import { Line } from "react-chartjs-2";
import { Users, Briefcase, IndianRupee, Clock } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Dummy Data for Stats
const stats = [
  { title: "Total Users", value: "1,245", icon: <Users />, color: "bg-blue-500" },
  { title: "Total Orders", value: "542", icon: <Briefcase />, color: "bg-green-500" },
  { title: "Revenue", value: "$23,500", icon: <IndianRupee />, color: "bg-purple-500" },
  { title: "Pending Orders", value: "32", icon: <Clock />, color: "bg-orange-500" },
];

// Chart Data
const lineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Revenue ($)",
      data: [5000, 8000, 7500, 11000, 15000, 18000, 23500],
      borderColor: "#6366F1",
      backgroundColor: "rgba(99, 102, 241, 0.5)",
    },
  ],
};

const Dash = () => {
  return (
    <div className="p-6 bg-gray-900 text-white">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="p-6 bg-gray-800 rounded-lg shadow-md flex items-center justify-between hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div>
              <h3 className="text-lg font-semibold">{stat.title}</h3>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-full text-white ${stat.color}`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Revenue Trend</h2>
        <Line data={lineChartData} />
      </div>
    </div>
  );
};

export default Dash;
