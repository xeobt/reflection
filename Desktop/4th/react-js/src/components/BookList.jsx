import BookCard from "./BookCard";

function BookList({ books, onToggleAvailability }) {

  if (books.length === 0) {
    return <h2>No books found.</h2>;
  }

  return (
    <div id="BookList">

      {books.map((book, index) => (
        <BookCard
          key={index}
          book={book}
          index={index}
          onToggleAvailability={onToggleAvailability}
        />
      ))}
    </div>
  );
}

export default BookList;