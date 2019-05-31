import mutations from './mutation-types';

export default {
  [mutations.SET_LOADER](state, isLoading) {
    state.isLoading = isLoading;
  },
  [mutations.SET_NOTES_LIST](state, notesList) {
    state.notesList = notesList;
  },
  [mutations.SET_SELECTED_NOTE](state, note){
    state.selectedNote = note;
  },
  [mutations.CHECK_SELECTED_NOTE](state, note){
    state.selectedNote = note;
  },
  [mutations.ADD_NOTE](state, note){
    state.notesList.push(note);
  },
  [mutations.UPDATE_NOTE](state, {index, note}){
    state.notesList.splice(index, 1, note);
  },
  [mutations.DELETE_NOTE](state, index){
    state.notesList.splice(index, 1);
  },

};
