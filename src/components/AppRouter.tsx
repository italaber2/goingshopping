import React from "react";
import { Link, Route, Switch } from "wouter";
import App from "../App";
import CheckoutPage from "../components/CheckoutPage";
import "../style/Navigation.css";

function AppRouter() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link data-testid="home-page-link" href="/">
              🏠 Home
            </Link>
          </li>
          <li>
            <Link data-testid="checkout-page-link" href="/checkout">
              🛒 Checkout
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default AppRouter;
