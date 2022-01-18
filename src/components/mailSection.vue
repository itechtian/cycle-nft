<template>
   <div class="mailist" data-aos="zoom-out">
      <div class="mail-text" id="mail">
        <h4>Join The Mailing List</h4>
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
</template>

<script>
export default {
    name:"Mail"
}
</script>

<style lang="css" scoped src= '@/assets/css/mobile.css'></style> 
<style>


.mailist {
  color: #747063;
  height: 40vh;
}

.mail-text > h4 {
  font-size: 45px;
  padding: 5px;
}

.form-input {
  width: 70%;
  /* height: 10vh; */
  border-radius: 360px;
  border: none !important;
  padding: 15px;
  padding-left: 30%;
}

.form-input:focus {
  outline: none;
  box-shadow: 2px 2px;
}

.mailform {
  background: #73706b;
  padding: 30px;
  height: 70%;
  padding-top:5%;
}

.mail-button {
  width: 15%;
  padding: 15px;
  border-radius: 360px;
  margin-left: -150px;
  border: #65615a solid 1px;
  font-weight: 600;
}

::placeholder{
    padding: 5px;
}

.mail-button:hover {
  background: #65615a;
  transform: translateZ(90%, 10%);
  transition: 0.4s linear;
  color: white;
}
</style>