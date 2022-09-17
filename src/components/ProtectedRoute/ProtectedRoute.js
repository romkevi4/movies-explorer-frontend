import React, { useState, useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AppContext } from '../../contexts/AppContext';


export default function ProtectedRoute({ children, ...props }) {
    // const [ signedIn, setSignedIn ] = useState(true);
    //
    // useEffect(() => {
    //     if (!localStorage.getItem('token')) {
    //         setSignedIn(false);
    //     }
    // }, []);

    const { loggedIn } = useContext(AppContext);
    // console.log(loggedIn);

    return (
        <Route>
            {() =>
                loggedIn ? children : <Redirect to="/" />
            }
        </Route>
    );
}