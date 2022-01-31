import {useContext} from "react";
import {Context} from "../Context/context"

function useToken(){

    const {token, setToken} = useContext(Context)

    return [token, setToken]
    
}

export default useToken;