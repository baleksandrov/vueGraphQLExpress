"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "\n  type Note {\n    _id: String!\n    name: String!\n    text: String!\n    state: Boolean\n  }\n  type Query {\n    note(_id: String!): Note\n    notes: [Note]\n  }\n  type Mutation {\n    addNote(name: String!, text: String!, state: Boolean): Note\n    editNote(_id: String, name: String, text: String): Note\n    deleteNote(_id: String, name: String, text: String): Note\n  }\n";
exports.default = _default;
//# sourceMappingURL=index.js.map