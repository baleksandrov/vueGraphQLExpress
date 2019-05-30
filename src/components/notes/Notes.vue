<template>
  <div class="container pt-3">
    <div class="row">
      <div class="col">
        <st-add-note></st-add-note>
      </div>
      <div class="col-md-8">
        <st-notes-list></st-notes-list>
      </div>
    </div>
  </div>
</template>

<script>

  import StAddNote from './AddNote';
  import StNotesList from './NotesList';

  export default {
    name: 'st-notes',
    components: {
      StAddNote,
      StNotesList,
    },
  };

</script>
