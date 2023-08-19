import React from "react";
import { Link, Route, Switch } from "wouter";
import App from "../App";
import ShoppingCartPage from "./ShoppingCartPage";
import "../style/Navigation.css";

function AppRouter() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">🏠</Link>
          </li>
          <li>
            <Link href="/shoppingCartPage">🛒</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/cart" component={ShoppingCartPage} />
      </Switch>
    </div>
  );
}

export default AppRouter;
