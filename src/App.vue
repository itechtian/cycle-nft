<template>
  <Index />
  <JoinTheTeam />
  <!-- <Nft /> -->
  <Footer />
</template>

<script>
import Index from './components/Index.vue'
import Footer from './components/footer.vue'
import JoinTheTeam from './components/Jointheteam.vue'
// import Nft from './components/memeNft.vue'



export default {
  name: 'App',
  components: {
   Index,
   JoinTheTeam,
  //  Nft,
   Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
