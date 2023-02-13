import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route path="/productdetail/:id" component={ ProductDetail } />
        <Route exact path="/" component={ Home } />
      </Switch>
    );
  }
}

export default App;
