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
  data () {
    return {
      img: ''
    }
  },
  mounted () {
    // this.$router.replace({ name: 'login' })
    let url = 'nos/login'
    this.$http.post(url, {
      'id': '11333',
      'passWord': '11111'
    }).then(res => {
      console.log(res)
    })
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
