import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: "Jamie oliver",
  title: "5 Ingredients Mediterranean: Simple Incredible Food",
  img: "./images/first_book.jpeg",
};

const secondBook = {
  author: "Richard Osman",
  title: "The Last Devil To Die: The Thursday Murder Club 4",
  img: "https://images-eu.ssl-images-amazon.com/images/I/71Ja+kWW-DL._AC_UL900_SR900,600_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

export default BookList;

//     color: "#617D98", // todo:
// fontSize: "0.75rem", //!
// marginTop: "0.5rem", //?
