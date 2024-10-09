import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rating = ({ rating }) => {
    console.log(`Rating: ${rating}`);
  return (
    <div className="book__ratings">
        {
          rating % 1 !== 0 ? (
            <>
              {new Array(Math.ceil(rating))
                .fill(0)
                .map((_, index) => (

                    index < Math.floor(rating) ? (
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
              {new Array(rating).fill(0).map((_, index) => (
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
  )
}

export default Rating