function Header({ totalBooks }) {
  return (
    <header id="Header">
      <h1>City Central Library</h1>

      <p>Read more blah blah blah</p>

      <h3>Total Books: {totalBooks}</h3>

      <p>
        "A room without books is like a body without a soul."
      </p>
    </header>
  );
}

export default Header;