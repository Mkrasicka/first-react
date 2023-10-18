import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <div>
      <div>
        <h1>Best Sellers in Books</h1>
      </div>
      <section className="booklist">
        {books.map((book, id) => {
          return <Book {...book} key={book.id} number={id} />;
        })}
      </section>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

export default BookList;

//     color: "#617D98", // todo:
// fontSize: "0.75rem", //!
// marginTop: "0.5rem", //?
