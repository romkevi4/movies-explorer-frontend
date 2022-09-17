import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';


export default function ProtectedRoute({ children }) {
    const [ signedIn, setSignedIn ] = useState(true);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            setSignedIn(false);
        }
    }, []);


    return (
        <Route>
            {() =>
                signedIn ? children : <Redirect to="/" />
            }
        </Route>
    );
}