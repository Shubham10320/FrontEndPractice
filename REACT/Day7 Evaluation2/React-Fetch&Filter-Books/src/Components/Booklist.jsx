const BookList = () => {
  return (
    <>
      <div className="filter-options">
        <label>
          Category:
          <select className="filter-by-category">
            <option value="all">All Categories</option>
            <option value="Classic">Classic</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Romance">Romance</option>
            <option value="Coming of age">Coming of Age</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Political satire">Political Satire</option>
            <option value="Mystery">Mystery</option>
            <option value="Epic poem">Epic Poem</option>
          </select>
        </label>

        <label>
          Sort by:
          <select className="sort-by">
            <option value="">Select an option</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="category">Category</option>
            <option value="publication_date">Publication Date</option>
          </select>
        </label>
        <label>
          Order:
          <select className="order">
            <option value="">Select an option</option>
            <option value="asc">Ascending Order</option>
            <option value="desc">Descending Order</option>
          </select>
        </label>
        <label>
          Search:
          <input />
        </label>
      </div>

      <div className="book-list">
//     conditionally render the loading text and Books details
	<h1 className="loading-text">Loading...</h1>
        {/* render your book components here and initially don't change the data of db.json*/}
      </div>
    </>
  );
};

export default BookList;
