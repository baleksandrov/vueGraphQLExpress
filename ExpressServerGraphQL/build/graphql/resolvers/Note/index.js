"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Note = _interopRequireDefault(require("../../../models/Note"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Note schema.
var _default = {
  Query: {
    note: function note(root, args) {
      return new Promise(function (resolve, reject) {
        _Note.default.findOne(args).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    notes: function notes() {
      return new Promise(function (resolve, reject) {
        _Note.default.find({}).populate().exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Mutation: {
    addNote: function addNote(root, _ref) {
      var name = _ref.name,
          text = _ref.text;
      var newNote = new _Note.default({
        name: name,
        text: text
      });
      return new Promise(function (resolve, reject) {
        newNote.save(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editNote: function editNote(root, _ref2) {
      var _id = _ref2._id,
          name = _ref2.name,
          text = _ref2.text;
      return new Promise(function (resolve, reject) {
        _Note.default.findOneAndUpdate({
          _id: _id
        }, {
          $set: {
            name: name,
            text: text
          }
        }).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteNote: function deleteNote(root, args) {
      return new Promise(function (resolve, reject) {
        _Note.default.findOneAndRemove(args).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
exports.default = _default;
//# sourceMappingURL=index.js.map