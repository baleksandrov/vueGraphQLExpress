<template>
  <div>
    <p>
      {{question}}
    </p>
    <p class="current-note mb-0" v-html="data">
    </p>
  </div>
</template>

<script>
  export default {
    name: 'st-confirm-delete',
    props: {
      question: String,
      data: String,
    },
  };
</script>

<style scoped>
  .current-note {
    color: #2992c7;
  }
</style>
