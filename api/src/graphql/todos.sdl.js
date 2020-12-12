export const schema = gql`
  type Todo {
    body: String
    _id: ID!
    id: Int!
    status: String
  }
  input TodoInput {
    id: Int!
    body: String!
    status: String!
  }
  type TodoPage {
    data: [Todo]!
    after: String
    before: String
  }
  type Query {
    todos: TodoPage!
  }
  type Mutation {
    createTodo(data: TodoInput!): Todo!
    updateTodo(
      id: ID!
      data: TodoInput!
    ): Todo
    deleteTodo(id: ID!): Todo
  }
`