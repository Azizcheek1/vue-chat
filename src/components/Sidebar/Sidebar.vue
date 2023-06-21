<template>
  <div class="container-fluid">
    <div class="sidebar">
      <div class="sidebar-box">
        <div class="user_img">
          <img class="user-img" src="../../assets//images/user.png" alt="" />
          <p class="user-logo__name text-center mb-0">Анатолий Викторович</p>
        </div>
        <ul class="sidebar-list">
          <li class="sidebar-list__item d-flex align-items-center">
            <img src="../../assets/icons//home.svg" alt="" />
            <p class="sidebar-list__text mb-0">Главный экран</p>
          </li>
          <li class="sidebar-list__item d-flex align-items-center">
            <img src="../../assets/icons//message.svg" alt="" />
            <p class="sidebar-list__text mb-0">Чат</p>
          </li>
          <li class="sidebar-list__item d-flex align-items-center">
            <img src="../../assets/icons//settings.svg" alt="" />
            <p class="sidebar-list__text mb-0">Настройки</p>
          </li>
        </ul>
      </div>
      <div class="back-box">
        <a class="back-box__link" href="#">Выйти</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
  height: 85vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fefefe;
}
.user-logo__name {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: rgba(1, 29, 50, 0.5);
}
.user_img{
    width: 100%;
    margin-bottom: 30px; 
}

.user-img{
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
}

.sidebar {
  max-width: 232px;
  width: 100%;
}

.sidebar-box{
    padding-top: 32px;
}

.sidebar-list{
    margin: 0;
    padding: 0;
}
.sidebar-list__item:not(:last-child) {
  margin-bottom: 30px;
}
.sidebar-list__text {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: #011d32;
  margin-left: 21px;
}

.back-box {
  margin-left: 35px;
}

.back-box__link {
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  color: #011d32;
  line-height: 120%;
}
</style>
