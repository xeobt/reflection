import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AddBookForm from "./components/AddBookForm";
import CategoryFilter from "./components/CategoryFilter";
import BookList from "./components/BookList";
import Footer from "./components/Footer";

function App() {
  const categories = [
    "Fiction",
    "Non-Fiction",
    "Science",
    "Bestseller",
    "Children",
  ];

  const [books, setBooks] = useState([
    {
      title: "Atomic Habits",
      author: "James Clear",
      categories: ["Non-Fiction", "Bestseller"],
      available: true,
      image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655988385l/40121378.jpg",
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      categories: ["Fiction", "Children", "Bestseller"],
      available: false,
      image: "https://m.media-amazon.com/images/I/81q77Q39nEL.jpg",
    },
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      categories: ["Science", "Non-Fiction"],
      available: true,
      image: "https://m.media-amazon.com/images/I/91ebghaV-eL._SY466_.jpg",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filteredBooks = books
    .filter(
      (book) =>
        selectedCategory === "All" ||
        book.categories.includes(selectedCategory)
    )
    .filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );

  const addBook = (newBook) => {
    setBooks([books, newBook]);
    setShowForm(false);
  };

  const toggleAvailability = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].available = !updatedBooks[index].available;
    setBooks(updatedBooks);
  };

  return (
    <>
      <Navbar />

      <Header totalBooks={books.length} />

      <div className="container" id="DivContainer">

        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <p>Searching for: {search}</p>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Hide Add Book Form" : "Show Add Book Form"}
        </button>

        {showForm && (
          <AddBookForm
            categories={categories}
            onAddBook={addBook}
          />
        )}

        <BookList
          books={filteredBooks}
          onToggleAvailability={toggleAvailability}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;