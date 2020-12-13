export const schema = gql`
  type Todo {
    id: Int!
    body: String
    status: String
  }

  input TodoInput {
    body: String!
    status: String!
  }

  # type TodoPage {
  #   data: [Todo]!
  #   after: String
  #   before: String
  # }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    createTodo(body: String!): Todo!
    updateTodo(id: Int!, data: TodoInput!): Todo
    deleteTodo(id: Int!): Todo
  }
`
