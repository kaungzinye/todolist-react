import React, {useState, useEffect, useRef} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const inputRef = useRef(null)
    useEffect(()=> {
      inputRef.current.focus()
    })

    const handleSubmit = e => {
        //prevent page from reloading
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
  return (
    <form className= 'TodoForm' onSubmit = {handleSubmit}>
        <input type = 'text' className = "todo-input"
        value = {value}
        placeholder='wyd today?'
        onChange = {(e) => setValue(e.target.value)}
        ref = {inputRef}
        />
        <button type= 'submit' className = 'todo-btn'>
            Add Task
        </button>
    </form>
  )
}
