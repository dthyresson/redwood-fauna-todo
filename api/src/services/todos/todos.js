const faunadb = require('faunadb')
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
} = faunadb.query

export const todos = async () => {
  const response = await client.query(
    Map(Paginate(Match(Index('todos'))), Lambda('X', Get(Var('X'))))
  )
  console.log(response)

  const results = response.data.map((item) => {
    return item.data
  })

  console.log(results)

  return results
}

export const createTodo = async ({ body }) => {
  const response = await client.query(
    Create(Collection('Todo'), { data: { body, status: 'on' } })
  )
  console.log(response)
  return response.data
}

// // export const createTodo = ({ body }) => db.todo.create({ data: { body } })

// export const updateTodoStatus = () =>
//   client.query(Update(Ref(Collection('Todo'), '282781647360754176'), { data }))

// export const updateTodoStatus = ({ id, status }) =>
//   db.todo.update({
//     data: { status },
//     where: { id },
//   })

// export const renameTodo = () =>
//   client.query(Update(Ref(Collection('Todo'), '282781647360754176'), { data }))

// export const renameTodo = ({ id, body }) =>
//   db.todo.update({
//     data: { body },
//     where: { id },
//   })
