
import './index.css';
import { books } from "./data";
import Nav from './components/Nav.jsx';
import Landing from './components/Landing.jsx';
import Highlights from './components/Highlights.jsx';
import Featured from './components/Featured.jsx';
import Discounted from './components/Discounted.jsx';
import Explore from './components/Explore.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './components/pages/Home.jsx';
import Books from './components/pages/Books.jsx';




function App() {
  return (
    <Router>

    <div className='App'>
      <Nav />
      {/*this: 'exact' keyword so that other pages don`t match the '/' thus taking them to home instead */}
      <Route path='/' exact component={Home}/>
      {/* this render() so that we can pass books as a prop, instead of importing it on the child. Keep the logic to the parent*/}
      <Route path='/books' render={() => <Books books={books}/>}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
