import React from "react";
import { Link, Route, Switch } from "wouter";
import App from "../../App";
import "../../style/Navigation.css";

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
      </Switch>
    </div>
  );
}

export default AppRouter;
