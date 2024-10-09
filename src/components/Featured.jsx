import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Book from "./ui/Book";
//  this: { books } is in parenthesis to specify what to look for in data.js since it is not exported as default
import { books } from "../data";

const Featured = () => {
    // console.log(books);
    
    function getFiveStarBooks() {
        return books.filter((book) => book.rating === 5).slice(0, 4).map(book => {
            // console.log("book:" +  book.url );
            console.log(book.rating);
            return <Book key={book.id} book={book}/>;
        });
    }

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {getFiveStarBooks()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
