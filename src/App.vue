<template>
  <div class="main">
    <RouterView />
  </div>
</template>

<script>
import Main from "./views/main.vue";
import Chat from "./views/notepad.vue";
export default {
  components: {
    Main,
    Chat,
  },
};
</script>

<style lang="scss">
<<<<<<< HEAD
.main {
  background-color: #fffdf4;
  height: 100vh;
=======
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
*{
  user-select: none;
}
.home{
  display: flex;
>>>>>>> 154fab52d5fa68c3e03054974dc65e9e40bdda58
}
</style>
