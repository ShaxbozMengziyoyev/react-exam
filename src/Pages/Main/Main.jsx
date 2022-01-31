import Public from "./../Public/Public"
import Private from "./../Private/Private"
import { Route, Routes } from "react-router-dom"
// import Login from "./../Login/Login"
import Todos from "./../Todos/Todo"
import SignUp from "./../SignUp/SignUp"
import Home from "./../Home/Home"
import Add from "./../Todos/Add"
import "./Main.css"

function Main() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<Public />}>
               <Route path="/signup" element={<SignUp />} />
            </Route>

            {/* <Route path="/login" element={<Login />} /> */}

            <Route element={<Private />}>
               <Route path="/todos" element={<Todos />} />
               <Route path="/add" element={<Add />} />
            </Route>
            <Route path="*" element={<h1>Page not found 404 :(</h1>} />
         </Routes>
      </>
   )
}
export default Main;