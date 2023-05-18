
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

import { useContext } from 'react';

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
            return    <div className="d-flex content-center items-center">
           <button className="btn btn-square loading"></button>
          </div> 
        }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to="/login"></Navigate>
 
};

export default PrivateRoutes;