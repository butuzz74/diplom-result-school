import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import localStorageService from "../../service/localStorage.service";

const ProtectedRoute = ({ component: Component, children, admin, ...rest }) => {
    const isAccess = localStorageService.getAccessToken();
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!isAccess) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                } else
                    if (isAccess && admin === false) {
                        return (
                            <Redirect
                                to={{
                                    pathname: "/profile",
                                    state: {
                                        from: props.location
                                    }
                                }}
                            />
                        );
                    }
                return Component ? <Component {...props} /> : children;
            }}
        />
    );
};
ProtectedRoute.propTypes = {
    component: PropTypes.func,
    admin: PropTypes.bool,
    location: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default ProtectedRoute;
