import { useState, useEffect } from "react";
import useToken from "../../Hook/useToken";

import "./SignUp.css"

function SignUp() {

   const [token, setToken] = useToken("")
   const [username, setUsername] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault()
  
      fetch('https://x8ki-letl-twmt.n7.xano.io/api:9h3BD7JQ/auth/signup', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: username,
            email: email,
            password: password
          })
        })
        .then(res => res.json())
        .then(data => setToken(data))
    }

   return (
      <>
         <form className="signup" onSubmit={(e) => handleSubmit(e)}>
            <a href="/"><div className="backbtn"></div></a>
            <h2 className="signup-title">
                Hey there! You can start by creating a new account.
            </h2>
            <div className="inps">
               <input 
                  className="form-control" 
                  type="text" 
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)} 
               />
               <input 
                  className="form-control" 
                  type="email" 
                  placeholder="Email" 
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input 
                  className="form-control" 
                  type="password" 
                  placeholder="Password" 
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button className="submit-btn" type="submit" >Submit</button>  
            </div>
            {/* <a className="signup-link" href="login">Do you have an account? <b>Login</b></a> */}
         </form>
      </>
   )
}
export default SignUp;