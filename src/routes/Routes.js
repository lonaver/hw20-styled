import React from "react";
import { Route, Routes as ReactRouterRouts } from "react-router-dom";
import Nav from "../components/navigation/Nav";
import HomePage from "../pages/home/Home.page";
import SingInPage from "../pages/singin/SingIn.page";
import SingUpPage from "../pages/singup/SingUp.page";

import styles from "./Route.module.css";

export const appRouts = {
  home: {
    id: 1,
    path: "/hw20-styled/",
    element: <HomePage />,
  },

  singIn: {
    id: 2,
    path: "/hw20-styled/singin",
    element: <SingInPage />,
  },
  singUp: {
    id: 2,
    path: "/hw20-styled/singup",
    element: <SingUpPage />,
  },
};

const Routes = () => {
  return (
    <div className={styles["container"]}>
      <Nav />
      <ReactRouterRouts>
        {Object.values(appRouts).map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </ReactRouterRouts>
    </div>
  );
};

export default Routes;
