function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div id="CategoryFilter">

      <button
        onClick={(e) => setSelectedCategory("All")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={(e) => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;