import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Book = ({ book }) => {
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          {/* this: no problem using img links for external */}

          <img src={book.url} alt="" />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        {
          book.rating % 1 !== 0 ? (
            <>
              {new Array(Math.ceil(book.rating))
                .fill(0)
                .map((_, index) => (

                    index < Math.floor(book.rating) ? (
                        <FontAwesomeIcon
                        icon="star"
                        className="book__ratings--star"
                        key={index}
                      />
                    ) : (
                        <FontAwesomeIcon
                        icon="star-half-alt"
                        className="book__ratings--star"
                        key={index}
                      />
                    )
        
                ))
                }
            </>
          ) : (
            <>
              {new Array(book.rating).fill(0).map((_, index) => (
                <FontAwesomeIcon
                  icon="star"
                  className="book__ratings--star"
                  key={index}
                />
              ))}
            </>
          )
          // this: fill array with 0s and map to display stars
          // _, index just so developers know that the first argument is not used
        }
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            {" "}
            <span className="book__price--normal">
              {book.originalPrice.toFixed(2)}
            </span>{" "}
            {book.salePrice.toFixed(2)}{" "}
          </>
        ) : (
          <> ${book.originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
};

export default Book;
