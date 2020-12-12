import TodoItem from 'src/components/TodoItem'
import { useMutation } from '@redwoodjs/web'

export const QUERY = gql`
  {
    todos {
      data {
        body
      }
    }
  }
`
const UPDATE_TODO_STATUS = gql`
  mutation TodoListCell_CheckTodo($id: Int!, $status: String!) {
    updateTodoStatus(id: $id, status: $status) {
      id
      __typename
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ todos }) => {
  const [updateTodoStatus] = useMutation(UPDATE_TODO_STATUS)

  const handleCheckClick = (id, status) => {
    updateTodoStatus({
      variables: { id, status },
      optimisticResponse: {
        __typename: 'Mutation',
        updateTodoStatus: { __typename: 'Todo', id, status: 'loading' },
      },
    })
  }
  console.log(todos)
  const {data} = todos
  const list = data.map((todo) => (
    <TodoItem key={todo.id} {...todo} onClickCheck={handleCheckClick} />
  ))

  return <ul className="list">{list}</ul>
}

export const beforeQuery = (props) => ({
  variables: props,
})