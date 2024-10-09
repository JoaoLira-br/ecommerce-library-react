import React from "react";
import Book from "../ui/Book";
import { useState } from "react";

const Books = ({ books:initialBooks }) => {
    // this: useState so that it auto-renders the whole component on change
    const [books, setBooks] = useState(initialBooks);
    function filterBooks(e) {
        console.log('pimba filter');
        const value = e.target.value;
        console.log(value);
        if (value === "LOW_TO_HIGH") {
            // this slice() is used to create a copy of the array so that the original array is not mutated (js does not like it)
            setBooks(books.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)));

        } else if (value === "HIGH_TO_LOW") {
            setBooks(books.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)));

        } else if (value === "RATING") {
            setBooks(books.slice().sort((a, b) => b.rating - a.rating));
        }
    }
  return (
    <div className="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
                <div className="books__header">
                    <h2 className="section__title books__header--title">All Books</h2>
                    <select name="" id="filter" defaultValue="DEFAULT" onChange={filterBooks}>
                        <option value="DEFAULT" disabled>Sort</option>
                        <option value="LOW_TO_HIGH">Price, low to high</option>
                        <option value="HIGH_TO_LOW">Price, high to low</option>
                        <option value="RATING">Rating</option>
                    </select>
                </div>
                <div className="books">
                    {
                        books.map((book) => {
                            return <Book key={book.id} book={book} />;
                        })
                    }
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
