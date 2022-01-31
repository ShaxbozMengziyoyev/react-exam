import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import "./Add.css"

function Add() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [selectValue, setSelectValue] = useState("");


  const hendleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: new Date().getTime(),
        content: inputValue,
        title: inputValue1,
        curs: selectValue,
        number: inputValue3,
        author: inputValue2
      }),
    }).catch((e) => console.error(e));
    e.target[0].value = null;
    e.target[1].value = null;
    e.target[2].value = null;
    e.target[3].value = null;
  };
  return (
    <>
      <div className="add">
        <h1>Add User</h1>
        <select className="add__select " onChange={(e) => setSelectValue(e.target.value)}>
          <option></option>
          <option>Web Programming</option>
          <option>SMM</option>
          <option>WEB DESIGNER</option>
          <option>Web Programming</option>
        </select>
      </div>
      <form onSubmit={(e) => hendleSubmit(e)}>
        <label className="add__label" htmlFor="">Name
          <input className="add__input" type="name" onChange={(e) => setInputValue(e.target.value)} />
        </label>
        <label className="add__label" htmlFor="">Surname
          <input className="add__input" type="surname" onChange={(e) => setInputValue1(e.target.value)} />
        </label>
        <label className="add__label" htmlFor="">Age
          <input className="add__input" type="age" onChange={(e) => setInputValue3(e.target.value)} />
        </label>
        <label className="add__label" htmlFor="">Phone Number
          <input className="add__input" type="number" onChange={(e) => setInputValue2(e.target.value)} />
        </label>
        <div>
          <button className="add__button" type="submit">Submit</button>
        </div>
      </form>
      <NavLink className="add__navlink" to="/Todos">Ro'yxatga O'tish</NavLink>
    </>
  )
}

export default Add