import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../views/home/home";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
