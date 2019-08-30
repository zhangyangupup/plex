<template>
  <div v-if="show"
       class="ui-message zy-components">
    <!-- header -->
    <div class="header-box">
      <i v-if="options.type=='success' && options.showIcon"
         class="iconfont icon-chenggong1 success-icon"></i>
      <i v-if="options.type=='error' && options.showIcon"
         class="iconfont icon-shibai1 error-icon"></i>
      <i v-if="options.type=='warning' && options.showIcon"
         class="iconfont icon-icon--jinggao warning-icon"></i>
      <p>成功信息</p>
      <i @click="closeMessage"
         class="iconfont icon-guanbi5 close-icon"></i>
    </div>
    <div v-html="options.text"
         class="message-content">
    </div>
    <p v-show="showThis">{{showCount}}</p>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {
      }
    }
  },
  data () {
    return {
      show: false,
      showThis: false,
      showCount: ''
    }
  },
  watch: {
    show: function () {
      this.$nextTick(() => {
        let nodes = document.querySelectorAll('.ui-message')
        let len = nodes.length
        nodes.forEach((ele, index) => {
          ele.style.top = (30 + ((len - index) - 1) * 140) + 'px'
        })
        return nodes
      })
    }
  },

  methods: {
    closeMessage () {
      console.log(this)
      this.show = false
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>

<style lang="stylus">
.ui-message
  width 324px
  height 126px
  position fixed
  top 30px
  right 20px
  background-color #fff
  // border 1px solid #ccc
  border-radius 5px
  display flex
  padding 0 10px
  z-index 999
  flex-direction column
  animation messageFrames 0.4s ease
  transition all 0.4s
  box-shadow 1px 1px 6px #aaa
  .header-box
    height 2rem
    line-height 2rem
    display flex
    flex-direction row
    // border-bottom 1px solid #ccc
    i
      text-align center
      padding 0 5px
      font-size 1.2rem
    p
      flex-grow 1
      text-align left
      font-size 0.9rem
      // font-weight 600
      line-height 2rem
      color #212121
    .success-icon
      color rgb(82, 196, 26)
    .error-icon
      color rgb(229, 64, 79)
    .warning-icon
      color rgb(255, 142, 20)
    .close-icon
      font-size 1rem
      color #aaa
      cursor pointer
      transform scale(1)
      transition all 0.4s
    .close-icon:hover
      color #40a9ff
      transform scale(1.2)
  .message-content
    line-height 1.3rem
    font-size 0.9rem
    color #555
    overflow hidden
    overflow-y auto
@keyframes messageFrames
  0%
    right -200px
    opacity 0
  100%
    right 20px
    opacity 1
</style>
