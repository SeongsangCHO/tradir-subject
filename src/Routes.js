import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "Pages/Home";
import Header from "Components/Header";
import Beerlist from "Pages/Beerlist";
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
        <Route exact path="/beerlist" component={Beerlist} />
        <Route exact path="/cartview" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
