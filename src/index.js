import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  const title = "5 Ingredients Mediterranean: Simple Incredible Food";
  const author = "Jamie Oliver";
  return (
    <article className="book">
      <img
        src="./images/first_book.jpeg"
        alt="5 Ingredients Mediterranean: Simple Incredible Food"
      />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

export default BookList;

//     color: "#617D98", // todo:
// fontSize: "0.75rem", //!
// marginTop: "0.5rem", //?
