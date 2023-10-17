import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/91QaYnD9RaL._AC_UL900_SR900,600_.jpg"
    alt="5 Ingredients Mediterranean: Simple Incredible Food"
  />
);
const Title = () => (
  <h2>5 Ingredients Mediterranean: Simple Incredible Food</h2>
);
const Author = () => {
  return <h4>Jamie Oliver</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

export default BookList;
