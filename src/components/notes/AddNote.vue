<template>
  <b-card>
    <b-form-group
      label="Name"
      label-for="name"
    >
      <b-form-input id="name" v-model="name" placeholder="Note name"></b-form-input>
    </b-form-group>
    <b-form-group
            label="Text"
            label-for="text"
    >
      <b-form-input id="text" v-model="text" placeholder="Note text"></b-form-input>
    </b-form-group>
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
        text: ''
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
