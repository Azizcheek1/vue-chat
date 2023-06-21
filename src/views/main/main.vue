<template>
  This main page
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("setshow_sidebar", true);
    this.$store.dispatch("setshow_navbar", true);
  },
};
</script>

<style>
</style>