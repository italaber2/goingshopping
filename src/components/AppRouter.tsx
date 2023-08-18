import React from "react";
import { Link, Route, Switch } from "wouter";
import App from "../App";
import ShoppingCart from "./ShoppingCart";
import "../style/Navigation.css";

function AppRouter() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/cart">My Shopping Cart</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/cart" component={ShoppingCart} />
      </Switch>
    </div>
  );
}

export default AppRouter;
