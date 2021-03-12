import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Route } from "react-router";
import { isLoggedInVar } from "../apollo";
import { Restaurants } from "../pages/restaurants";
import { meQuery } from "../__generated__/meQuery";

const ClientRoutes = [
  <Route path="/" exact>
    <Restaurants />
  </Route>,
];

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
      verified
    }
  }
`;

export const LoggedInRouter = () => {
  const { data, loading, error } = useQuery<meQuery>(ME_QUERY);

  if (loading || error || !data) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    );
  }
  return (
    <div>
      <h1>Logged In</h1>
      <h2>{data.me.email}</h2>
      <h2>{data.me.role}</h2>
      <button onClick={() => isLoggedInVar(false)}>Log Out</button>
    </div>
  );
};
