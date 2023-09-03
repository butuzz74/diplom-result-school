import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavigationLink = ({ children, path }) => {
    return (
        <NavLink
            to={path}
            className="nav-link text-decoration-underline"
            activeClassName="selected"
            style={{ color: "white" }}
        >
            {children}
        </NavLink>
    );
};
NavigationLink.propTypes = {
    path: PropTypes.string,
    children: PropTypes.any
};
export default NavigationLink;
