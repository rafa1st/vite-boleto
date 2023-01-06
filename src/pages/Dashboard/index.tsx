import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const { state } = useLocation();

  return (
    <div>
      <h3>Dashboard</h3>
      <p>{state}</p>
    </div>
  );
};

export default Dashboard;
