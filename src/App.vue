<template>
  <div class="home">
    <Navbar />
    <Sidebar />
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
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.home {
}
</style>
