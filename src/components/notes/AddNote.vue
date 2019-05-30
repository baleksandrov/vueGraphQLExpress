<template>
  <b-card>
    <b-form-group
      label="Name"
      label-for="name"
    >
      <b-form-input id="name" v-model="name" placeholder="Note name"></b-form-input>
    </b-form-group>
    <b-form-textarea
            id="text"
            v-model="text"
            placeholder="Enter notes text..."
            rows="3"
            max-rows="6"
    ></b-form-textarea>
    <b-btn block @click="addNote" variant="success">Add</b-btn>
  </b-card>
</template>

<script>
  import actions from '../../store/action-types';

  export default {
    name: 'st-add-note',
    data() {
      return {
        name: '',
        text: '',
      };
    },
    methods: {
      addNote() {

          const note = {
            name: this.name,
            text: this.text
          }

          this.$store.dispatch(actions.ADD_NOTE, note);

      },
    }
  };
</script>

<style scoped>

</style>
