"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _Note = _interopRequireDefault(require("./Note/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolvers = [_Note.default];

var _default = (0, _mergeGraphqlSchemas.mergeResolvers)(resolvers);

exports.default = _default;
//# sourceMappingURL=index.js.map