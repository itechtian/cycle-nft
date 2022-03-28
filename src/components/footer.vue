<template>
  <div class="iconWrapper mt-1">
    <div class="container social_icon">
      <i class="fab fa-discord"></i>
      <i class="fab fa-twitter-square"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-reddit"></i>
      <i class="fab fas fa-paper-plane"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.iconWrapper {
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #6a665f;
}
.social_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px;
}

.fab {
  font-size: 45px;
  margin-left: 80px;
  color: white;
  cursor: pointer;
}

.fab:hover {
  transform: translateY(-30%);
  transition: ease-in 0.3s;
}
</style>
<style lang="css" scoped src= '@/assets/css/mobile.css'></style>
