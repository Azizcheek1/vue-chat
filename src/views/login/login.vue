<template>
  <div class="container-fluid">
    <div class="row h-100">
      <div class="col-md-6 h-100 form-div">
        <div class="col-md-7">
          <form @submit.prevent="">
            <h4>Hush kelibsiz</h4>
            <h5>Kirish:</h5>
            <div class="input-group">
              <input
                type="text"
                class="form-control shadow-none"
                placeholder="Foydalanuvchi nomi"
              />
            </div>
            <div class="input-group my-1">
              <input type="password" class="form-control shadow-none" placeholder="Parol" />
            </div>
            <h6 class="d-flex justify-content-between px-2">
              <a @click="$router.push(`/sign-up`)">Royxatdan o`tish</a
              ><a>Parolni unutdingizmi?</a>
            </h6>
            <div class="submit">
              <button class="btn btn-success w-100">Tasdiqlash</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-6 h-100 p-4 col2">
        <div class="login-img">
          <div class="login-img__item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container-fluid {
  width: 100%;
  height: 100vh;
}
.form-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-img {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/images/bank.jpg);
  border-radius: 10px;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.login-img__item {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
@media (max-width: 768px) {
  .col2 {
    display: none;
  }

  .col-md-7 {
    width: 90%;
  }
}
</style>