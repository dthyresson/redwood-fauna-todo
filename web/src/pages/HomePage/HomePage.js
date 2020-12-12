import AddTodo from 'src/components/AddTodo'
import TodoListCell from 'src/components/TodoListCell'

const HomePage = () => {
  return (
    <div className="wrapper">
      <h1 className="title">Todo List</h1>
      <TodoListCell />
      <AddTodo />
    </div>
  )
}

export default HomePage
