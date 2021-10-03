import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "Pages/Home";
import { Header } from "Components/Common";
import BeerList from "Pages/BeerList";
import CartView from "Pages/CartView";
import Page404 from "Pages/Page404";
// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/beerlist" component={BeerList} />
        <Route exact path="/cartview" component={CartView} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

export default Routes;
