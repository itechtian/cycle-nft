<template>
  <div class="a5"  data-aos="zoom-out">
    <div class="a5-head"  id="nft-meme">
      <h3>Meme NFT</h3>
    </div>

    <div class="nft-meme">
      <div>
       
      <div class="row">
        <div class="col mt-5">
          <img src="@/assets/image/nft13.png" width="600px" height="500px" alt="">
        </div>

        <div class="col m-4">
          <div class="row mb-2">
            <div class="col-8  col-md-3 m-3"><img src="@/assets/image/nft4.png" class="abn" alt="" width="170px" height="200px"></div>
            <div class="col-8 col-md-3 m-3"><img src="@/assets/image/nft12.png" alt="" class="abn" width="170px" height="200px"></div>
            <div class="col-8 col-md-3 m-3"><img src="@/assets/image/nft8.png" alt="" class="abn" width="170px" height="200px"></div>
          </div>
            <div class="row mb-2">
            <div class="col-12 mb-2 col-md-3 m-3"><img src="@/assets/image/nft2.png" alt="" class="abn" width="170px" height="200px"></div>
            <div class="col-12 mb-2 col-md-3 m-3"><img src="@/assets/image/nft13.png" class="abn" alt="" width="170px" height="200px"></div>
            <div class="col-12 mb-2 col-md-3 m-3"><img src="@/assets/image/nft12.png" class="abn" alt="" width="170px" height="200px"></div>
          </div>
            <div class="row">
            <div class="col-3 col-md-3 m-3"><img src="@/assets/image/nft11.png" alt="" class="abn" width="170px" height="200px"></div>
            <div class="col-3 col-md-3 m-3"><img src="@/assets/image/nft10.png" alt="" class="abn" width="170px" height="200px"></div>
            <div class="col-3 col-md-3 m-3"><img src="@/assets/image/nft3.png"  id="abn" class="abn"  width="170px" height="200px"></div>
          </div>
        </div>
      </div>
      <div class="nav-control">
       <div class="nav-guard">
        <button class="btn-transparent border-light m-2 btn"> gg </button>
        <span class="mt-3">O1/02</span>
        <button class="btn-parent border-light btn m-2"> gg </button>

      </div>
      </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "NFt",

  mounted(){

      this.selectClass();
  },

  methods: {

    selectClass(){
      o = document.getElementsByClassName("abn");
      var i;

      for (i = 0; i < o.length; i++) {
          o[i].addEventListener("click", ()=>{
            console.log(i)
          })
      }  

  }

};
</script>

<style>
.nav-control{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.nav-guard{
  width: 50%;
  display: flex;
  justify-content: space-around;
}
.a5{
  width: 100%;

}
.nft-meme{
  background: #4C4944;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.ra2{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.col-mobile{
    display: none !important;
}
</style>
<style lang="css" scoped src= '@/assets/css/mobile.css'></style>
