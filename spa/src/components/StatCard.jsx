function StatCard({ title, value, isLoading }) {
  return (
    <div className="stat-card">
      <h4>{title}</h4>
      <p>{isLoading ? "Loading..." : value}</p>
    </div>
  );
}

export default StatCard;
