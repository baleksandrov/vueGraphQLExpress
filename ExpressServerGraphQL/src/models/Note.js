import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the Note Schema.
const NoteSchema = new Schema({
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

const Note = mongoose.model("Note", NoteSchema);

export default Note;
