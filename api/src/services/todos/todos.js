const faunadb = require('faunadb');
import { client } from 'src/lib/db'

const {
  Ref,
  Paginate,
  Match,
  Index,
  Map,
  Lambda,
  Get,
  Var,
  Create,
  Collection,
  Update,
} = faunadb.query;

export const todos = () => client.query(
  Map(
    Paginate(
      Match(
        Index("todos")
      )
    ),
    Lambda(
      "X",
      Get(
        Var("X")
      )
    )
  )
)

// export const todos = () => db.todo.findMany()


export const createTodo = ({body}) => client.query(
  Create(
    Collection('Todo'),
    { data: {body} }
  )
)

// export const createTodo = ({ body }) => db.todo.create({ data: { body } })

export const updateTodoStatus = () => client.query(
  Update(
    Ref(
      Collection('Todo'), '282781647360754176'
    ),
    { data }
  )
)

// export const updateTodoStatus = ({ id, status }) =>
//   db.todo.update({
//     data: { status },
//     where: { id },
//   })

export const renameTodo = () => client.query(
  Update(
    Ref(
      Collection('Todo'), '282781647360754176'
    ),
    { data }
  )
)

// export const renameTodo = ({ id, body }) =>
//   db.todo.update({
//     data: { body },
//     where: { id },
//   })