// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';


// const PrivateRoutes = ({ component: Component, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             render={(props) => {
//                 const token = window.localStorage.getItem('token');
//                 if (token) {
//                     return <Component {...props} />;
//                 } else {
//                     return <Navigate to="/login" />;
//                 }
//             }}
//         />
//     );
// };

// export default PrivateRoutes;


import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ Component, ...rest }) => {
    const token = window.localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Render the provided component if authenticated
    return <Component {...rest} />;
};

export default PrivateRoutes;










