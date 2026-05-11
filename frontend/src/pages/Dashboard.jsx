import AdminDashboard from "./admin/AdminDashboard";
import ChefDashboard from "./admin/ChefDashboard";
import IntervenantDashboard from "./admin/IntervenantDashboard";

export default function Dashboard() {

  const role = localStorage.getItem("role");

  if (role === "Admin") return <AdminDashboard />;
  if (role === "Chef") return <ChefDashboard />;
  return <IntervenantDashboard />;
}