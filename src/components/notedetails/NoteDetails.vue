<template>
  <div class="container">
      <div class="row">
          <div class="col-4 mt-5">
              <div class="card p-3">
                <div>
                    <b-form>
                      <b-form-group id="input-group-1" label="Note name: " label-for="input-1">
                        <b-form-input
                          id="input-1"
                          v-model="getCurrentNote.name"
                          placeholder="Enter note name"
                        ></b-form-input>
                      </b-form-group>
                            <b-form-group id="input-group-2"
                            label="Password: " label-for="input-2">
                        <b-form-input
                          id="input-2"
                          v-model="getCurrentNote.text"
                          placeholder="Enter note text"
                        ></b-form-input>
                      </b-form-group>
                      <b-button type="button" @click="onSave" variant="success">Запази</b-button>
                    </b-form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>

import actions from '../../store/action-types';

  export default {
    name: 'st-note-details',
    computed: {
      getCurrentNote() {
        return this.$store.state.selectedNote;
      }
    },
    methods: {
      onSave(evt) {
        console.log('save');
        let selectedNote = this.$store.state.selectedNote;
        this.$store.dispatch(actions.SAVE_NOTE, selectedNote);

      },
    },
  };

</script>
