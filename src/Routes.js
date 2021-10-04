import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import { Home, BeerList, CartView, Page404 } from "Pages";
import { Header, Spinner } from "Components/Common";
import Portal from "Components/Modal/Portal";
// import ReactGA from "react-ga";

const Home = lazy(() => import("Pages/Home"));
const BeerList = lazy(() => import("Pages/BeerList"));
const CartView = lazy(() => import("Pages/CartView"));
const Page404 = lazy(() => import("Pages/Page404"));

const Routes = () => {
  return (
    <Router>
      <Header />
      <Suspense
        fallback={
          <Portal>
            <Spinner />
          </Portal>
        }
      >
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/beerlist" component={BeerList} />
          <Route exact path="/cartview" component={CartView} />
          <Route component={Page404} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
