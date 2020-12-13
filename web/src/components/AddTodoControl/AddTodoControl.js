import { useState } from 'react'
import Check from 'src/components/Check'

const AddTodoControl = ({ submitTodo }) => {
  const [todoText, setTodoText] = useState('')

  const handleSubmit = (event) => {
    submitTodo(todoText)
    setTodoText('')
    event.preventDefault()
  }

  const handleChange = (event) => {
    setTodoText(event.target.value)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Check type="plus" />
      <div className="input-body">
        <input
          type="text"
          value={todoText}
          placeholder="Memorize the dictionary"
          onChange={handleChange}
          className="input"
        />
        <input type="submit" value="Add Item" className="button" />
      </div>
    </form>
  )
}

export default AddTodoControl
