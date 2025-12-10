import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import FilterButtons from "../components/FilterButtons";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import "./Dashboard.css";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  // Fetch Data
  const loadData = async () => {
    setLoading(true);
    const res = await fetch("https://your-nepse-api.com");
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  // Auto-refresh every 30 sec
  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 30000);
    return () => clearInterval(interval);
  }, []);

  let styles={
  display:"flex",
  flexWrap:"wrap",
};

  return (
    <div style={styles}>
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Track NEPSE stocks with real-time AI signals</p>


      {/* STAT CARDS */}
      <div className="stats-grid flex flex-col gap-2" >
         <StatCard  title="NEPSE Index" value={data?.index} isLoading={loading} />
        <div className="flex flex-row gap-5">
    
        <StatCard className="hover:shadow-lg cursor-pointer box-border size-32 border-4 p-4 hover:bg-gray-100 rounded-2xl mr-7" title="Total Trades" value={data?.trades} isLoading={loading} />
        <StatCard title="Total Turnover" value={data?.turnover} isLoading={loading} />
        </div>
        <div className="flex flex-row gap-5">
        <StatCard title="Gainers" value={data?.gainers} isLoading={loading} />
        <StatCard title="Losers" value={data?.losers} isLoading={loading} />
        </div>
      </div>

      {/* SEARCH & FILTER */}
      <SearchBar setQuery={setQuery} />
      <FilterButtons selected={filter} setSelected={setFilter} />

      {/* LOADING SECTION */}
      {loading ? <Loader /> : <p>Data loaded successfully</p>}
    </div>
    </div>
  );
}

export default Dashboard;
