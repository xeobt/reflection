import { useState } from "react";

function AddBookForm({ categories, onAddBook }) {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckbox = (category) => {

    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((c) => c !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onAddBook({
      title,
      author,
      categories: selectedCategories,
      available: true,
      image: "https://via.placeholder.com/150",
    });

    setTitle("");
    setAuthor("");
    setSelectedCategories([]);
  };

  return (
    <div id="AddBookForm">
        <form onSubmit={handleSubmit}>

        <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />

        <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        />

        <h4>Select Categories</h4>

        {categories.map((category) => (
            <label key={category}>
            <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckbox(category)}
            />
            {category}
            </label>
        ))}

        <button>Add Book</button>
        </form>
    </div>
  );
}

export default AddBookForm;