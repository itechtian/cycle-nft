<template>
  <div class="container roadmap-wrapper" data-aos="zoom-out">
    <div class="rr">
    <div class="road-map" id="roadmap">
      <h3>ROADMAP</h3>
    </div>
    </div>
    <div class="dr">
      <div class="row a3">
        <div class="col align-self-end">
          <h3>Milesstone 1</h3>
          <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h6>
        </div>
        <div class="col align-self-start">
          <h3>Milesstone 1</h3>
          <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h6>
        </div>
      </div>
      <div class="container mt-5 mb-4">
        <img src="@/assets/image/roadmap.png" alt="" width="100%" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Location_dot_red.svg/1024px-Location_dot_red.svg.png"
          width="5%"
          class="animate-img"
          alt=""
        />
      </div>
      <div class="row a3">
        <div class="col col-5 m-2">
          <h3>Milesstone 1</h3>
          <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h6>
        </div>
        <div class="col col-5 m-2">
          <h3>Milesstone 1</h3>
          <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h6>
        </div>
      </div>
    </div>

    <!-- roadmap for mobile -->

    <div class="container gh">
      <div class="mb-4 py-2">
        <h1>Milesstone 1</h1>
        <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h6>
      </div>
       <div class="mb-4 py-2">
        <h1>Milesstone 1</h1>
        <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h6>
      </div> 
      <div class="mb-4 py-2">
        <h1>Milesstone 1</h1>
        <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h6>
      </div> 
      <div class="mb-4 py-2">
        <h1>Milesstone 1</h1>
        <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h6>
      </div>
     
    </div>
  
     
     
  
  </div>
</template>

<script>
export default {
  name: "Roadmap",
};
</script>
<style lang="css" scoped src= '@/assets/css/animate-style.css'></style>



<style>
.road-map {
  background: #110e1d;
  border-radius: 360px;
  width: 70%;
  padding: 10px;
  color: white;
  margin-top: 150px;
  margin-bottom: 70px;
}

.rr{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.a3 {
  margin-top: 50px;
  height: 20vh;
}

.gh{
  display: none;
}

@media (max-width: 700px) {

    .dr{
      display: none !important;
    }

    .gh{
      display: block;
    }
}
</style>