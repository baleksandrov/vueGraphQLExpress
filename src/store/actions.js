import mutations from './mutation-types';
import actions from './action-types';
import dataService from '../api/data-service';
import graphQlService from '../api/graphql-service';
import getters from './getters';

export default {

    [actions.GET_NOTES_LIST]({commit}, params= "_id name text {_id}") {
        commit(mutations.SET_LOADER, true);
        graphQlService.getNotesList(
            params,
            (response) => {
                commit(mutations.SET_LOADER, false);
                commit(mutations.SET_NOTES_LIST, response.data.notes);
            },
            (error) => {
                commit(mutations.SET_LOADER, false);
                console.log(error);
            }
        )
    },
    [actions.ADD_NOTE]({commit}, params){
        commit(mutations.SET_LOADER, true);
        graphQlService.addNote(
            params,
            (response) => {
                commit(mutations.SET_LOADER, false);
                commit(mutations.ADD_NOTE, response.data.addNote);
            },
            (error) => {
                commit(mutations.SET_LOADER, false);
                console.log(error);
            }
        )
    },
    [actions.DELETE_NOTE]({commit, state}, params){
        commit(mutations.SET_LOADER, true);
        graphQlService.deleteNote(
            params,
            (response) => {
                commit(mutations.SET_LOADER, false);
                const _id = response.data.deleteNote._id;
                const removeIndex =
                getters.getNoteIndex(state.notesList, _id);
                commit(mutations.DELETE_NOTE, removeIndex);
            },
            (error) => {
                commit(mutations.SET_LOADER, false);
                console.log(error);
            }
        )
    },
    [actions.SAVE_NOTE]({commit, state}, params){
        commit(mutations.SET_LOADER, true);
        graphQlService.saveNote(
            params,
            (response) => {
                commit(mutations.SET_LOADER, false);

            },
            (error) => {
                commit(mutations.SET_LOADER, false);
                console.log(error);
            }
        )
    },

};
