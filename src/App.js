import './App.css';
import Navbar from './components/Navbar'
import Products from './components/Products'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Modal from './components/Modal'
import Cart from './components/Cart'


function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact>
            <Products />
          </Route>
          <Route path='/detail'>
            <ProductDetail />
          </Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
        </Switch>
      <Modal />
      </Router>
    </>
  )
}

export default App;
