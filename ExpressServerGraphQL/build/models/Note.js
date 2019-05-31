"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema; // Create the Note Schema.

var NoteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: false
  }
});

var Note = _mongoose.default.model("Note", NoteSchema);

var _default = Note;
exports.default = _default;
//# sourceMappingURL=Note.js.map