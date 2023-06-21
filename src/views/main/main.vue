<template>
  <div class="main">
    <users></users>
  </div>
</template>

<script>
import users from './components/users.vue';
export default {
  components: { users },
  mounted() {
    this.$store.dispatch("setshow_sidebar", true);
    this.$store.dispatch("setshow_navbar", true);
  },
};
</script>

<style lang="scss" scoped>
.main{
  margin-top: 20px;
  border: 1px solid #000;
  padding: 10px;
  width: 352px;
}
</style>