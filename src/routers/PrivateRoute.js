import React from "react";
import PropTypes from 'prop-types';
import { Redirect, Route } from "react-router-dom";
// rest = el resto de los elementos
export const PrivateRoute = ({ isAuthenticated, component:Component, ...rest }) => {
    // component primero en minuscula porque es lo que recibe el <PrivateRoute />
    // <PrivateRoute path="/" component={DashboardRoutes} isAuthenticated={user.logged}/>
    // El 2do en mayúscula porque es el Component que se va a renderizar y es preferible que vaya
    // con mayúsculas para indicar que es un componente
  

  localStorage.setItem('lastPath', rest.location.pathname);
  return (
    <Route
      {...rest}
      component={(props) =>
        (isAuthenticated) ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
    isAuthenticated:PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

// Este componente sería el PrivateRoute en el AppRouter.js en vez de Route del switch
