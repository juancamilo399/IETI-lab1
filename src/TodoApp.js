import React, { useState } from 'react'
import { TodoList } from './TodoList'

export const TodoApp = () => {

  const [text, settext] = useState("")
  const [item, setitem] = useState([])


  const handleInputChange = (e) => {
    settext(e.target.value)
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const newItem = {
      text: text,
      id: Date.now()
    };

    setitem([...item, newItem])

    settext('')

  }



  return (
    <>
      <h3 style={{ textAlign: "center" }}>TODO</h3>

      <div className="container">

        <div className="row">

          <div className="col" style={{ textAlign: "center" }}>

            <TodoList todoList={item} />

          </div>
        </div>


        <div className="row">

          <div className="col" style={{ textAlign: "center" }}>

            <form onSubmit={handleSubmit} >
              <label htmlFor="new-todo">
                What needs to be done?
            </label>
              <input
                id="new-todo"
                value={text}
                onChange={handleInputChange}
              />
              <button className="btn btn-primary">
                Add  {item.length + 1}
              </button>
            </form>

          </div>
        </div>


      </div>


    </>
  )
}
