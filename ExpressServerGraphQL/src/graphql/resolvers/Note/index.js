// Note schema.
import Note from "../../../models/Note";

export default {
    Query: {
        note: (root, args) => {
            return new Promise((resolve, reject) => {
                Note.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        notes: () => {
            return new Promise((resolve, reject) => {
                Note.find({})
                    .populate()
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        }
    },
    Mutation: {
        addNote: (root, {name, text}) => {
            const newNote = new Note({ name, text});

            return new Promise((resolve, reject) => {
                newNote.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        editNote: (root, {_id, name, text}) => {
            return new Promise((resolve, reject) => {
                Note.findOneAndUpdate({_id}, {$set: {name, text}}).exec(
                    (err, res) => {
                        err ? reject(err) : resolve(res);
                    }
                );
            });
        },
        deleteNote: (root, args) => {
            return new Promise((resolve, reject) => {
                Note.findOneAndRemove(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};
