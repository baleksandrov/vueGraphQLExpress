<template>
  <div class="list-group-item p-2">
    <span class="note-info d-flex align-items-center justify-content-between">
      <div class="note-data mx-3">
        <span class="note-name mr-3">{{ name }}</span>
        <span class="note-text text-info">{{ text }}</span>
      </div>
      <div class="buttons-container mx-3">
        Check this note:
        <input type="checkbox" @click="checkNote">
        <span class="edit-item ml-3"
              @click="viewNoteDetails">
          <i class="fa fa-edit" aria-hidden="true"></i>
        </span>
        <span class="remove-item ml-3"
              @click="setSelectedNote"
              v-b-modal.modalDeleteNote>
          <i class="fa fa-times" aria-hidden="true"></i>
        </span>
      </div>
    </span>
  </div>
</template>

<script>
  import mutations from '../../store/mutation-types';
  import actions from '../../store/action-types';

  export default {
    name: 'mt-notes-list-item',
    props: {
      _id: String,
      name: String,
      text: String,
      state: Boolean
    },
    methods: {
      setSelectedNote() {
          const currentNote = {
              _id: this._id,
              name: this.name,
              text: this.text
          };
          this.$store.commit(mutations.SET_SELECTED_NOTE,
          currentNote);
      },
      checkNote() {

        const currentNote = {
          _id: this._id,
          name: this.name,
          text: this.text
        };

        this.$store.dispatch(actions.CHECK_NOTE, currentNote);
      },
      viewNoteDetails(){
        this.setSelectedNote();
        this.$router.push({
          name: 'Note',
          params: { id: this._id}
        });
      }
    },
  };
</script>


