import { useLocation } from "react-router-dom";


const Dashboard = () => {
  const { state } = useLocation();


  return (
    <>
      <h1>Dashboard</h1>
      <p>{state}</p>
    </>
  );
};

export default Dashboard;
