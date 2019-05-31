export default `
  type Note {
    _id: String!
    name: String!
    text: String!
    state: Boolean
  }
  type Query {
    note(_id: String!): Note
    notes: [Note]
  }
  type Mutation {
    addNote(name: String!, text: String!, state: Boolean): Note
    editNote(_id: String, name: String, text: String, state: Boolean): Note
    deleteNote(_id: String, name: String, text: String): Note
  }
`;
