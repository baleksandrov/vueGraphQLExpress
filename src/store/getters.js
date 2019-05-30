export default {
  getNoteIndex: (notesList, _id) =>
    notesList.findIndex(note => note._id === _id)
};
