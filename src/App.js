import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/cart" component={ Cart } />
        <Route path="/product/:id" component={ ProductDetail } />
        <Route exact path="/" component={ Home } />
      </Switch>
    );
  }
}

export default App;
