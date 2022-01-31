import {Outlet, Navigate} from "react-router-dom";
import useToken from "./../../Hook/useToken"
            
function Private() {

    const [token] = useToken()

    if(token){
        return <Outlet/> 
    }

    return <Navigate to="/todos"/>
   
}

export default Private;