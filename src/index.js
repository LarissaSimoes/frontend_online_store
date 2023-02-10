import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import './index.css';
import ShoppingCart from './pages/ShoppingCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/shopping-cart" component={ ShoppingCart } />
      <Route exact path="/" component={ App } />
    </Switch>
  </BrowserRouter>
);
