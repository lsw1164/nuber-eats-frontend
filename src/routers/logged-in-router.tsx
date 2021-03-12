import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { Restaurants } from "../pages/restaurants";
import { useMe } from "../hooks/useMe";
import { Header } from "../components/header";
import { UserRole } from "../__generated__/globalTypes";

const ClientRoutes = [
  <Route path="/" exact>
    <Restaurants />
    <button onClick={() => isLoggedInVar(false)}>Log Out</button>
  </Route>,
];

export const LoggedInRouter = () => {
  const { data, loading, error } = useMe();

  if (loading || error || !data) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    );
  }
  return (
    <Router>
      <Header />
      <Switch>
        {data.me?.role === UserRole.Client && ClientRoutes}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
