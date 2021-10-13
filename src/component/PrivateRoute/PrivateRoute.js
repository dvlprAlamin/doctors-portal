import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useMyContext } from '../../context/context';

const PrivateRoute = ({ children, ...rest }) => {
    const { loggedInUser } = useMyContext();
    console.log(loggedInUser);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;