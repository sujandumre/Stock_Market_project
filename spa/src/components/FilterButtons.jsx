function FilterButtons({ selected, setSelected }) {
  const filters = ["All", "Buy", "Sell", "Hold"];

  return (
    <div className="filters">
      {filters.map((f) => (
        <button
          key={f}
          className={selected === f ? "active" : ""}
          onClick={() => setSelected(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
