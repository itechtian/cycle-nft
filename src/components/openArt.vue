<template>
  <br><br>
  <div>
    <div class="m-bn">
    <div class="mailis" data-aos="zoom-out">
      <div class="mail-text" id="mail">
        <h5 style="color:#6c665f;">Join The Mailing List</h5>
      </div>
      <div class="mailform">
        <form action="">
          <input
              type="email"
              placeholder="Enter Your email address"
              class="form-input"
              required
          />
          <button type="submit" class="mail-button">Submit</button>
        </form>
      </div>
    </div>
    </div>
    <br>
 <div class="a4" data-aos="zoom-out">

        <div class="a4row">
          <div
            class="a shadow p-3 m-3"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h4 class="mb-3">I own an Art</h4>
            <div class="d-2ac">
              <button
                href="#"
                class="
                  btn
                  btn-light
                  p-4
                  w-50
                  animate_animated animate__swing animate__infinite
                  infinite
                "
              >
                View Gallery
              </button>
            </div>
            <div style="display:flex;justify-content:center;" class="mt-3">
        <p style="width:50%">Find new favorites, Place your bids</p>
        </div>
          </div>

          <div class="a">
            <h4 class="mb-3">I create an Art</h4>
            <div class="d-2ac">
              <button href="#" class="btn btn-dark p-4 w-50">Go to Store</button>
            </div>
            <div style="display:flex;justify-content:center;" class="mt-3">
            <p style="width:50%">
          Reach your audience. We are abstracting marketing and financial
          management. Focus, just.create.
        </p>
        </div>
      
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "OpenArt"
}
</script>
<style lang="css" scoped src= '@/assets/css/mobile.css'></style>


<style>

.a4 {
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  background: #65615a;
  align-items: center;
  color: #ffffff;
  margin-top: 5%;
  
}

.d-2ac {
  display: flex;
  justify-content: center;
  align-items: center;
}

.a4row {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
  width: 100% !important;
}

.m-bn{
  display: none;
}

.a4row > .col {
  height: 50%;
}

.a{
    width: 100%;
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