import {Outlet, useLocation, Navigate} from "react-router-dom"
import useToken from "./../../Hook/useToken"

function Public() {

    const [token] = useToken()

    const {pathname} = useLocation()

    if(token && pathname === "/signup"){
        return <Navigate to="/todos"/>
    }

    return  <Outlet/>
}

// Authorization
// Authentication
// RBAC - Role Based Acess Controll

export default Public;