function BookCard({ book, index, onToggleAvailability }) {
  return (
    <div className="card" id="BookCard">

      <img src={book.image} alt={book.title} />

      <h2>{book.title}</h2>

      <h4>{book.author}</h4>

      <div>
        {book.categories.map((category) => (
          <span key={category}>
            {category}
          </span>
        ))}
      </div>

      <h3>
        {book.available ? "Available" : "Borrowed"}
      </h3>

      <button
        onClick={() => onToggleAvailability(index)}
      >
        {book.available ? "Borrow" : "Return"}
      </button>

    </div>
  );
}

export default BookCard;