import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  // El user que le paso en HeroesApp.js que a su vez viene del useReducer
  // <AuthContext.Provider value={{user, dispatch}} >


  // Acá uso el hook useHistory porque el navbar solo es un componente, no una ruta 
  // por eso no tiene acceso al history de las props
  const history= useHistory();
  const handleLogout = ()=>{

    history.replace('/login');
    dispatch({type: types.logout})
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand ps-4" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Buscar
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ms-auto pe-5">
          <span className="nav-item nav-link text-info">{user.name}</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>Logout</button>
        </ul>
      </div>
    </nav>
  );
};
