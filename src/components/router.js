import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../views/home/home";
import Schedule from "../views/schedule/schedule";
import History from "../views/history/history";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/history" component={History} />
      </Switch>
    </BrowserRouter>
  );
}
