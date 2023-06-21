<template>
  <nav>
    <div class="container-fluid">
      <div class="logo">
        <img class="logo__img" src="../../assets/images/logo1.png" alt="" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  border-bottom: 1px solid #011D32;
}
.logo__img {
  width: 250px;
  padding: 28px 32px;
}
</style>
