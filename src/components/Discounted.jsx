import React from "react";
import { books } from "../data";
import Book from "./ui/Book.jsx";

const Discounted = () => {
  return (
    <section className="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">

            Discounted <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books.filter(book => book.salePrice > 0).slice(0,8).map((book) => {
                console.log(book.rating);
              return <Book key={book.id} book={book} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
