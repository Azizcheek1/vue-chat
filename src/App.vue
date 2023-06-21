<template>
  <Navbar v-if="sidebar" />
  <div class="home">
    <Sidebar v-if="sidebar" />
    <router-view />
  </div>
</template>
<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
export default {
  components: {
    Navbar,
    Sidebar,
  },
  computed: {
    sidebar() {
      if (["login", "sign-up"].includes(this.$route.name)) {
        return false;
      } else return true;
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.home{
  display: flex;
}
</style>
