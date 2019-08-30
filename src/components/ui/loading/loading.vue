<template>
  <div :style="'background:'+options.bgColor"
       v-if="show"
       class="ui-loading zy-compoennts">
    <div class="loading-box">
      <i :style="'color:'+options.iconColor"
         :class="'iconfont '+options.icon"></i>
      <p :style="'color:'+options.fontColor">{{options.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="stylus">
.ui-loading
  z-index 999
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background rgba(0, 0, 0, 0.6)
  .loading-box
    width 10vw
    height 10vw
    position relative
    top 50%
    left 50%
    transform translate(-50%, -50%)
    i
      margin 0 auto
      font-size 2.3rem
      line-height 2.3rem
      display block
      text-align center
      color #fff
      animation loadingKey 0.8s linear infinite
    p
      font-size 0.8rem
      line-height 3rem
      color #2c3e50
      text-align center
@keyframes loadingKey
  0%
    transform rotate(360deg)
  100%
    transform rotate(0deg)
</style>
