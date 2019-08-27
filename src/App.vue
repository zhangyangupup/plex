<template>
  <div id="app">
    <Main />
  </div>
</template>
<script>
import Main from './views/main/index.vue'
export default {
  components: {
    Main
  },
  mounted () {
    this.$router.replace({ name: 'components' })
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  width 100vw
  height 100vh
  background-image url('./assets/images/sign_bg.db29b0fb.png')
  background-size cover
  background-repeat no-repeat
</style>
