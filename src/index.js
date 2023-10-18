import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Jamie oliver",
    title: "5 Ingredients Mediterranean: Simple Incredible Food",
    img: "./images/first_book.jpeg",
    id: 1,
  },
  {
    author: "Richard Osman",
    title: "The Last Devil To Die: The Thursday Murder Club 4",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71Ja+kWW-DL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === 1);
    console.log(book);
  };

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  // ! Set what properties we can access so you don't need to do props.img props.title props.author
  const { img, title, author, getBook, id } = props;
  console.log(props);

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>BUY</button>
      <h4>{author.toUpperCase()}</h4>
      {/* {children} */}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

export default BookList;

//     color: "#617D98", // todo:
// fontSize: "0.75rem", //!
// marginTop: "0.5rem", //?
