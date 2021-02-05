import React from 'react'
import { Item } from './Item'
//import { Todo } from './Todo'

export const TodoList = ({todoList}) => {

   

    return (
        <div >

            <ul style={{display: "inline-block", textAlign: "left"}}>

                {todoList.map((item) => <Item key={item.id} value={JSON.stringify(item)} />)}
            </ul>
            
        </div>
    )
}


