import Check from 'src/components/Check'

const TodoItem = ({ id, body, status, onClickCheck }) => {
  const handleCheck = () => {
    const newStatus = status === 'off' ? 'on' : 'off'
    onClickCheck(id, newStatus)
  }

  return (
    <li className="item">
      <div className="target" onClick={handleCheck}>
        <Check type={status} />
      </div>
      <div className="todo-body">{status === 'on' ? <s>{body}</s> : body}</div>
    </li>
  )
}

export default TodoItem
