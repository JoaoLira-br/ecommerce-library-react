import "./index.css";
import { books } from "./data";
import Nav from "./components/Nav.jsx";
import { useState, useEffect } from "react";
import Landing from "./components/Landing.jsx";
import Highlights from "./components/Highlights.jsx";
import Featured from "./components/Featured.jsx";
import Discounted from "./components/Discounted.jsx";
import Explore from "./components/Explore.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Books from "./components/pages/Books.jsx";
import BookInfo from "./components/pages/BookInfo.jsx";
import Cart from "./components/pages/Cart.jsx";

function App() {
  // this: useState() to keep track of the cart across the app and all the components: need to communicate between bookInfo and cart
  const [cart, setCart] = useState([]);

  // this: function addToCart implements logic in parent component, so that we can pass it as a prop to the child BookInfo
  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }
  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        // this: checking for duplicates and updating the quantity property adding it if first time
        return item.id === book.id ? { ...item, quantity: +quantity } : item;
      })
    );
  }
  function removeItem(item){
    setCart(cart.filter((cartItem) => +cartItem.id !== +item.id));
    console.log(`removeitem ${item}`);
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }
  // this: top tech useState hook debuggging: since setCart is async, we can`t console.log(cart) right after it, so we use useEffect() with [cart] dependency to console.log(cart) after the state has been updated
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        {/* this numberOfItems() with parenthesis so that the counter is already called on child */}
        <Nav numberOfItems={numberOfItems()}/>
        {/*this: 'exact' keyword so that other pages don`t match the '/' thus taking them to home instead */}
        <Route path="/" exact component={Home} />
        {/* this render() so that we can pass books as a prop, instead of importing it on the child. Keep the logic to the parent*/}
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route
          path="/cart/"
          render={() => <Cart cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
