import "./../Todos/Todos.css"
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"

function Todos() {
   const [todo, setTodo] = useState([]);
   const [update, setUpdate] = useState("");
   const [update1, setUpdate1] = useState("");
   const [update2, setUpdate2] = useState("");
   const [update3, setUpdate3] = useState("");
   const [selectValue1, setSelectValue1] = useState("");
   const [modal, setModal] = useState(false);
   const [object, setObject] = useState("");
   const [searchValue, setSearchValue] = useState("");
   const [type, setType] = useState("asrc")


   //Add ToDo
   useEffect(() => {
      fetch(`http://localhost:3000/todos?q=${searchValue}`)
         .then((res) => res.json())
         .then((data) => setTodo(data));
   }, [todo]);

   //Delete ToDo
   const deleteTodo = (id) => {
      fetch(`http://localhost:3000/todos/${id}`, {
         method: "DELETE",
      }).catch((e) => console.error(e));
   };

   //Update ToDo
   const updateTodo = (e) => {
      e.preventDefault();
      fetch(`http://localhost:3000/todos/${object.id}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            content: update,
            title: update1,
            curs: selectValue1,
            number: update3,
            author: update2,
         }),
      }).catch((e) => console.error(e));
      e.target[0].value = null;
      e.target[1].value = null;
      e.target[2].value = null;

      e.target[4].value = null;
   };


   return (
      <>
         <div className="todos">
            <input className="todos__input" type="text" placeholder="Search for Todos..." onChange={(e) => setSearchValue(e.target.value)} />
            <select className="todo__select" onChange={(e) => setType(e.target.value)}>
               <option>Ascending</option>
               <option>Descending</option>
            </select>
            <NavLink className="todos__navlink" to="/Add">Foydalanuvchi qo'shish</NavLink>
         </div>

         {modal && (
            <form onSubmit={(e) => updateTodo(e)}>
               <label className="add__label" htmlFor="">Name
                  <input
                     placeholder={object.content}
                     onChange={(e) => setUpdate(e.target.value)}
                  />
               </label>
               <label className="add__label" htmlFor="">Surname
                  <input
                     placeholder={object.title}
                     onChange={(e) => setUpdate1(e.target.value)}
                  />
               </label>
               <label className="add__label" htmlFor="">Age
                  <input
                     placeholder={object.number}
                     onChange={(e) => setUpdate3(e.target.value)}
                  />
               </label>
               <label className="add__label" htmlFor="">Curs
                  <select onChange={(e) => setSelectValue1(e.target.value)}>
                     <option></option>
                     <option>Web Programming</option>
                     <option>SMM</option>
                     <option>WEB DESIGNER</option>
                     <option>Web Programming</option>
                  </select>
               </label>
               <label className="add__label" htmlFor=""> Phone Number
                  <input
                     placeholder={object.author}
                     onChange={(e) => setUpdate2(e.target.value)}
                  />
               </label>
               <button className="todo__add">Add</button>
               <button className="todo__button-delet" onClick={() => setModal(false)} >x</button>
            </form>
         )}

         <ul className="todo__list">
            {todo.map((t) => {
               return (
                  <li key={t.id} className="todo__items">
                     <div className="container">
                        <div className="container__div">
                           <h3 onClick={() => {
                              setModal(true)
                              setObject(t)
                           }}>{t.content}</h3>
                        </div>
                        <hr className="conteiner__hr" />
                        <div className="container__div">
                           <h4 onClick={() => {
                              setModal(true)
                              setObject(t)
                           }}>{t.title}</h4>
                        </div>
                        <hr className="conteiner__hr" />
                        <div className="container__div">
                           <p onClick={() => {
                              setModal(true)
                              setObject(t)
                           }}>{t.number}</p>
                        </div>
                        <hr className="conteiner__hr" />
                        <div className="container__div">
                           <p onClick={() => {
                              setModal(true)
                              setObject(t)
                           }}>{t.curs}</p>
                        </div>
                        <hr className="conteiner__hr" />
                        <div className="container__div">
                           <p onClick={() => {
                              setModal(true)
                              setObject(t)
                           }}>{t.author}</p>
                        </div>
                        <hr className="conteiner__hr" />
                        <div className="container__div">
                           <button onClick={() => deleteTodo(t.id)}>Delete</button>
                        </div>

                     </div>
                     {/* <button onClick={() => {
                     setModal(true)
                     setObject(t)
                  }}>Update</button> */}
                  </li>

               );
            })
            }
         </ul>
         {/* <NavLink to="/update">Todo O'tish</NavLink> */}
      </>
   )
}
export default Todos;
