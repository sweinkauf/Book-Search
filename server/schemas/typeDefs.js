const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
    type Query {
    me: User
  }
  input bookInput {
    authors: [String]
    description: String!
    bookId: String!
    title: String!
    image: String!
    link: String!
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: bookInput!): User
    removeBook(bookId: ID!): User
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId
  }

`;

module.exports = typeDefs;
