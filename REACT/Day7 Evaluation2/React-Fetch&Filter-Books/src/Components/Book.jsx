const Book = () => {
  return (
    <div className="book">
      {/* Below h2 tag should have title */}
      <h2>{}</h2>
      {/* the below span tags should have respective text content */}
      <p>
        Author: <span>{}</span>
      </p>
      <p>
        ISBN:<span>{}</span>{" "}
      </p>
      <p>
        Category: <span>{}</span>
      </p>
      <p>
        Publication Date:<span>{}</span>
      </p>
    </div>
  );
};

export default Book;
