import { SearchBarDashboard } from "@/components/searchBarDashboard/searchBarDashboard";
import { useState } from "react";

const Dashboard = () => {
  const [ dataUser, setDataUser ] = useState({
    name: ""
  })


  return <div className="mx-large mt-small">
    <h1>user Dashboard</h1>
  </div>;
};

export default Dashboard;
