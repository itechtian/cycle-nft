<template>
<div class="wrapper">
  <Index />
  <Roadmap />
  <NFTrow />
  <OpenArt />
  <JoinTheTeam />
  <Mail />
  <NFt />
  <Footer />
</div>
</template>

<script>
import Index from './components/Index.vue'
import Footer from './components/footer.vue'
import JoinTheTeam from './components/Jointheteam.vue'
import Roadmap from './components/roadmap.vue'
import NFTrow from './components/nft-row.vue'
import Mail from './components/mailSection.vue'
import OpenArt from './components/openArt.vue'
import NFt from './components/memeNft.vue'


export default {
  name: 'App',
  components: {
   Index,
   JoinTheTeam,
   NFTrow,
   Mail,
   Roadmap,
   OpenArt,
   NFt,
   Footer,
  }
}
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
}

.wrapper {
    /* background-color: gray; */
    background-image: url("https://firebasestorage.googleapis.com/v0/b/helene-invoice.appspot.com/o/cycle-nft%2Fbackground.svg?alt=media&token=98b19e69-10ac-46e2-a28b-7dd39bea7a80");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  }
</style>

