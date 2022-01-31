import { useState } from "react"
import useToken from "../../Hook/useToken"
import "./Login.css"

function Login() {
   const [token] = useToken()

   const [tokenCheck, setTokenCheck] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault()

      fetch('https://x8ki-letl-twmt.n7.xano.io/api:KxriubIW/auth/login', {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            email: email,
            password: password
         })
      })
         .then(res => res.json())
         .then(data => console.log(data))
   }

   // console.log(tokenCheck);

   // if (token === tokenCheck) {
   //    console.log("hello");
   // }

   return (
      <>
         <form className="signup" onSubmit={(e) => handleSubmit(e)}>
            <a href="/"><div className="backbtn"></div></a>
            <h2 className="signup-title">
               Enter your login crediantials to get access:
            </h2>
            <div className="inps">
               <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button className="submit-btn">Submit</button>
            </div>
            <a className="signup-link" href="signup">Create an account</a>
         </form>
      </>
   )
}
// export default Login;