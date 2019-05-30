<template>
  <div class="list-group-item p-2">
    <span class="note-info d-flex align-items-center justify-content-between">
      <div class="note-data mx-3">
        <span class="note-name mr-3">{{ name }}</span>
        <span class="note-text text-info">{{ text }}</span>
      </div>
      <div class="buttons-container mx-3">
        <span class="view-note"
              @click="viewNoteDetails"
        >
          <i class="fa fa-bar-chart mx-2" aria-hidden="true"></i>
          View Details
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

  export default {
    name: 'mt-notes-list-item',
    props: {
      _id: String,
      name: String,
      text: String,
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

<style scoped>

  .view-note {
    border-radius: 5px;
    background-color: #2b994f;
    font-size: 14px;
    border: 1px solid #217f3b;
    color: #fff;
    cursor: pointer;
  }

</style>
