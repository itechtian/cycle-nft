<template>
  <div id="home">
     <a href="#home">
 <ion-icon name="arrow-up-outline" class="" id="scrollUp"></ion-icon></a>
    <header>
      <div class="header-item">
        <div class="logo">
          <div class="logoitems">
            <img src="@/assets/image/logo.svg" alt="" class="logo-icon" />
          </div>
        </div>
        <div class="nav-link">
          <a href="#roadmap">Roadmap</a>
          <a href="#join">Join our team</a>
          <a href="#mail">Support</a>
          <a href="#nft-meme">MemeNFTs</a>
          <button class="button" id="open">Contact us</button>
        </div>
        <i
          class="fas fa-bars menu-tab"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        ></i>
      </div>
    </header>
    <div
      class="offcanvas offcanvas-top"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <button
        type="button"
        class="btn-close text-reset ml-5"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>

      <a href="#roadmap">Roadmap</a>
      <a href="#join">Join our team</a>
      <a href="#mail-phone">Support</a>
      <button class="button" id="open">Contact us</button>
    </div>

    <!-- ++++++  -->

    <main>
      <section>
        <div class="landing">
          <div class="intro">
            <div class="intro-item animate__animated animate__lightSpeedInLeft">
              <div>
                <h6 class="d-1">All things <span class="d-1span">Art</span></h6>
                <h6 class="d-1">
                  All things
                  <span
                    class="
                      d-1span
                      animate__animated
                      animate__flash
                      animate__delay-2s
                      animate__infinite
                      infinite
                    "
                    >Grand</span
                  >
                </h6>
              </div>
              <div class="d-1a">
                <span>Sight and Sound Come full circle</span>
              </div>
              <div class="p-3 py-3 px-3">
                <h6 class="d-2">- NFT Degen, 2021</h6>
              </div>
            </div>
          </div>
          <div class="display_pic animate__animated animate__flash">
            <div
              class="card animate__animated animate__flip animate__delay-2s"
              style="width: 24rem"
            >
              <img
                src="@/assets/image/nft1.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body" style="background: #d8d8d8">
                <div class="container text-start">
                  <h4 class="card-title">TERRAFORMA</h4>
                  <span class="card-text">Reserved price</span>
                  <h4>2.00 ETH <span class="card-text">($4,892.22)</span></h4>
                  <div class="d-2a">
                    <button href="#" class="btn btn-dark text-white m-1">
                      Place a Bid
                    </button>
                    <button href="#" class="btn btn-outline-dark m-1">
                      Go to Market
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div class="data"></div>

    <!-- ++++++  -->

    <div class="container wrapper2" data-aos="zoom-out">
      <div class="secondLayer mb-3">
        <h2>Open-Window NFT auction on the Planet...</h2>
      </div>
      <div class="container board mb-5">
        <div class="a1 mb-5">
          <h4 class="f1">
            Only the <span style="color: #b7b3ab">Biggest</span> Only the Best
          </h4>
        </div>
        <div
          class="a2 animate__animated animate__pulse animate__infinite infinite"
        >
          <img src="@/assets/image/nft2.png" alt="" width="450" height="500" />
        </div>
      </div>
    </div>

    <div class="gap">
      <hr />
    </div>
  </div>
</template>


<script>
export default {
  name: "Index",

  mounted() {
     document.getElementById("scrollUp").style.visibility = 'hidden'
     document.addEventListener('scroll', ()=>{
      if(scrollY > 150){
        document.getElementById("scrollUp").style.visibility = 'visible';
      }else{
        document.getElementById("scrollUp").style.visibility = 'hidden';
      }
    })

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped src= '@/assets/css/mobile.css'></style>

<style scoped>
header {
  border-bottom: solid purple 1px;
  width: 100%;
  height: 15vh;
  padding-top: 2%;
 
  background: #b7b3ab;
}

.mail-text > h4 {
  font-size: 50px;
  margin: 15px;
}

.menu-tab {
  display: none;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-link {
  width: 60%;
}

.logo-icon {
  width: 50%;
}

a {
  margin: 2%;
  text-decoration: none;
  color: black;
}

.offcanvas{
  height: 50vh !important;
}

.button {
  background: black;
  color: white;
  padding: 5px;
  border-radius: 50px;
  border: none;
  width: 17%;
}

/*-------*/

.landing {
  display: flex;
  height: 100vh;
  align-items: center;
}

.intro {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-item {
  text-align: left;
}

.d-1 {
  font-size: 70px;
  color: #110e1d;
  font-weight: 900;
}

.d-2 {
  font-size: 20px;
  color: #110e1d;
  font-weight: 900;
}

ion-icon{
  width:5%;
  font-size:40px;
  position:fixed;
  right:5px;
  bottom:10px;
  z-index:1;
  color: #ffffff;
}

ion-icon:hover{
  color: #110e1d;
  transition: .4s ease;
}

@media(max-width:999px){
  ion-icon{
    display: none;
  }

}

.d-1span {
  color: white;
}

.d-1a {
  background-color: white;
  font-size: 30px;
  border-radius: 360px;
  font-weight: 500;
  padding-left: 15px;
}

.btn {
  width: 50%;
  height: 10vh;
  border-radius: 0 !important;
}

.d-2a {
  display: flex;
  margin-top: 5%;
}

.card-text {
  font-size: 10px;
  color: #cbc8cb;
}

.data {
  width: 100%;
  height: 10vh;
  margin-top: 50px;
  margin-bottom: 60px;
  background: #73706b;
}

/* ------ */
.wrapper2 {
  background: #110e1d;
  color: #f7f7f7;
  padding: 20px;
  height: 60vh;
}

.secondLayer {
  margin: 20px;
}

.board {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.a1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
 
  
}

@media(max-width:999px){
  .a1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper2 {
  background: #110e1d;
  color: #f7f7f7;
  padding: 20px;
  height: 90vh;
}
}

.f1 {
  font-size: 80px;
}

/* ----- */
.gap {
  margin-top: 200px;
}

.a4 {
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: stretch;
  background: #65615a;
  align-items: center;
  color: #ffffff;
}

.b-color {
  background: #6a665f;
}

.d-2ac {
  display: flex;
  justify-content: center;
  align-items: center;
}

.a4row {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.a4row > .col {
  height: 50%;
}

.d-2ac-btn1 {
  background-color: #b7b3ab;
  height: 15vh;
}

.d-2ac-btn2 {
  background-color: #110e1d;
  color: #ffffff;
  height: 15vh;
}

.d-2ac-btn2:hover {
  color: #ffffff;
}

.display_pic:hover {
  box-shadow: 10px 10px;
  cursor: pointer;
  transition: 0.5s ease-out;
}
</style>