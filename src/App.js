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
        <Route exact path="/" component={ Home } />
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
        <Route
          path="/productdetail/:id"
          render={ (id) => <ProductDetail id={ id } /> }
        />
      </Switch>
    );
  }
}

export default App;
