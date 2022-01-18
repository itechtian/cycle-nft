<template>
  <div class="a5">
      <div class="a5-head" data-aos="zoom-out" id="join">
        <h3>Join The Team</h3>
      </div>
      <div class="imd" data-aos="zoom-out">
          <img src="@/assets/image/jointeam.png" class="" alt="">
      </div>

      <div class="e-flex" data-aos="zoom-out">
          <span class="g"> Developers </span>
          <span>Python, Go, Java, Javascript, Rust</span>
      </div>

       <div class="e-flex" data-aos="zoom-out">
          <span class="g"> Media </span>
          <span>Writing, Graphics</span>
      </div>

      <div class="email-div mb-5">
          <div data-aos="zoom-out">
              <button class="email-btn shadow"> Send us a mail</button>
          </div>
      </div>

  </div>
  
</template>

<script>
export default {
  name: "JoinTheTeam",
};
</script>

<style>
.g{
  background:#4C4944;
  color: #ffffffff;
  width: 25%;
  margin-right: 100px;
  padding: 10px;
}
.a5 {
  background-color: #b7b3ab;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.a5-head {
  background: #110e1d;
  border-radius: 360px;
  width: 60%;
  padding: 10px;
  color: white;
  margin-top: 150px;
  margin-bottom: 70px;
}

.imd{
  margin-bottom: 40px;
}

.e-flex{
    border: solid #9E9B94;
    margin-bottom:20px ;
    display: flex;
    align-items: center;
    width: 50%;
}

.email-div{
  background:#9E9B94;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.email-btn{
  border: none !important;
  padding: 20px;
  background: #FFFFFFFF;
}

.email-btn:hover{
  background: green;
  transition:cubic-bezier(1, 0, 0, 1).5s;
  color: white;
}
</style>
<style lang="css" scoped src= '@/assets/css/mobile.css'></style>
