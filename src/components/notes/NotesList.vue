<template>
  <div>
    <b-card>
      <ul class="list-group">
        <p v-show="!getNotesList.length" class="text-center p-3">You don't have notes yet</p>
        <st-notes-list-item v-if="getNotesList.length"
                               v-for="(note) in getNotesList"
                               :key="note._id"
                               :_id="note._id"
                               :name="note.name"
                               :text="note.text"
        ></st-notes-list-item>
      </ul>
    </b-card>
    <b-modal id="modalDeleteNote"
             ref="modal"
             title="Delete this note"
             @ok="deleteNote"
             ok-title="OK"
             cancel-title="Cancel"
    >
      <st-confirm-delete :question="modalTitle"
                         :data="noteName"></st-confirm-delete>
    </b-modal>
  </div>
</template>

<script>

  import StNotesListItem from './NotesListItem';
  import StConfirmDelete from '../common/ConfirmDelete';
  import actions from '../../store/action-types';

  export default {
    name: 'mt-students-list',
    components: {
      StNotesListItem,
      StConfirmDelete,
    },
    data() {
      return {
        modalTitle: 'Are you sure you want to delete this',
        searchName: '',
      };
    },
    computed: {
      getNotesList() {
        return this.$store.state.notesList;
      },
      noteName(){
          return this.$store.state.selectedNote.name;
      }
    },
    created() {
      this.getNotes();
    },
    methods: {
      getNotes() {
        this.$store.dispatch(actions.GET_NOTES_LIST);
      },
      deleteNote() {
          const _id = this.$store.state.selectedNote._id;
          this.$store.dispatch(actions.DELETE_NOTE, _id);
      },
    },
  };

</script>

<style>

</style>
