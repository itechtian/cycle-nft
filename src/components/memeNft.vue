<template>
  <div class="a5"  data-aos="zoom-out">
    <div class="a5-head"  id="nft-meme">
      <h3>Meme NFT</h3>
    </div>

    <div class="nft-meme">
      <div>
       
      <div class="nn">
        <div class="nn-1 mt-5">
          <img src="@/assets/image/nft13.png" width="600px" height="500px" alt="">
        </div>

        <div class="nn-2 m-4">
          <div class="nn-3 mb-2">
            <div class=""><img src="@/assets/image/nft4.png"  alt="" width="170px" height="200px"></div>
            <div class=""><img src="@/assets/image/nft12.png" alt=""  width="170px" height="200px"></div>
          </div>
            <div class="nn-3 mb-2">
            <div class=""><img src="@/assets/image/nft2.png" alt="" class="abn" width="170px" height="200px"></div>
            <div class=""><img src="@/assets/image/nft13.png" class="abn" alt="" width="170px" height="200px"></div>
          </div>
            <div class="nn-3">
            <div class=""><img src="@/assets/image/nft11.png" alt="" class="abn" width="170px" height="200px"></div>
            <div class=""><img src="@/assets/image/nft10.png" alt="" class="abn" width="170px" height="200px"></div>
          </div>
        </div>
         <div class="nn-2-d m-4">
          <div class="nn-3 mb-2">
            <div class=""><img src="@/assets/image/nft4.png"  alt="" width="170px" height="200px"></div>
            <div class=""><img src="@/assets/image/nft12.png" alt=""  width="170px" height="200px"></div>
            <div class=""><img src="@/assets/image/nft12.png" alt=""  width="170px" height="200px"></div>
          </div>
            <div class="nn-3 mb-2">
            <div class=""><img src="@/assets/image/nft2.png" alt="" class="abn" width="170px" height="200px"></div>
            <div class=""><img src="@/assets/image/nft13.png" class="abn" alt="" width="170px" height="200px"></div>
            <div class=""><img src="@/assets/image/nft12.png" alt=""  width="170px" height="200px"></div>
          </div>
            <div class="nn-3">
            <div class=""><img src="@/assets/image/nft11.png" alt="" class="abn" width="170px" height="200px"></div>
            <div class=""><img src="@/assets/image/nft10.png" alt="" class="abn" width="170px" height="200px"></div>
            <div class=""><img src="@/assets/image/nft12.png" alt=""  width="170px" height="200px"></div>
          </div>
        </div>
      </div>
      <div class="nav-control">
       <div class="nav-guard">
        <ion-icon name="arrow-back-circle-outline"></ion-icon>
        <span class="mt-3">O1/02</span>
        <ion-icon name="arrow-forward-circle-outline"></ion-icon>

      </div>
      </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "NFt",
}
</script>

<style>
.nn{
  display: flex;
  flex-direction: column;
  
}

.nn-2-d{
  display: none;
}

.nn-2{
  padding: 50px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: center;
}

.nn-3{
  display: flex;
}
.nav-control{
  display: flex;
 
}
.nav-guard{
  width: 100%;
  display: flex;
  color: white;
}


@media(min-width:999px){
  .nn{
    flex-direction: row;
  }

  .nn-2-d{
    display: block;
  }

  .nn-2{
    display: none;
  }
  .nav-control{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.nav-guard{
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
}
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
