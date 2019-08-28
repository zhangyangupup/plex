<template>
  <!--
    confirm组件
    打开this.$confirm.show(options)
    关闭this.$confirm.close()
   -->
  <div v-if="show"
       class="ui-confirm zy-component">
    <!-- confirm box -->
    <div class="confirm-box">
      <!-- header boc -->
      <div class="confirm-header">
        <!-- <i class="iconfonticon-tongzhi"></i> -->
        <p>提示</p>
        <i @click="cancleConfirm"
           class="iconfont icon-poweroff"></i>
      </div>
      <!-- word content -->
      <div v-html="options.words"
           class="word-content">

      </div>
      <!-- buttons -->
      <div class="btn-box">
        <button @click="options.sureFun"
                class="confirm-sure">
          {{options.sureText}}
        </button>
        <button @click="options.cancleFun"
                class="confirm-close">
          {{options.closeText}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {
        return {

        }
      }
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    cancleConfirm () {
      // this.$el.parentNode.removeChild(this.$el)
      this.show = false
      console.log('as')
    }

  }
}
</script>

<style lang="stylus">
headerHeight = 40px
borderStyle = 1px solid #ddd
.ui-confirm
  position fixed
  width 100vw
  height 100vh
  top 0
  left 0
  color #212121
  z-index 999
  background rgba(0, 0, 0, 0.4)
  .confirm-box
    width 550px
    min-height 250px
    animation confirmFrames 0.4s ease
    position relative
    top 30%
    left 50%
    transform translate(-50%, -50%)
    background-color #ffffff
    border-radius 3px
    display flex
    flex-direction column
    overflow hidden
    .confirm-header
      height headerHeight
      line-height headerHeight
      padding 0 20px
      display flex
      flex-direction row
      border-bottom borderStyle
      i
        width 2.4rem
        text-align center
        line-height headerHeight
        font-size 1.2rem
        color #777
        cursor pointer
        transition all 0.8s
      i:hover
        color themeColor
      p
        font-weight 600
        flex-grow 1
        text-align left
        line-height headerHeight
    .word-content
      flex-grow 1
      padding 10px 20px
      line-height 1.5rem
    .btn-box
      height headerHeight
      line-height headerHeight
      display flex
      flex-direction row-reverse
      border-top borderStyle
      padding 0 20px
      button
        flex 0 60px
        height 30px
        line-height 30px
        position relative
        top 4px
        font-size 0.9rem
        text-align center
        overflow hidden
        color #555555
        border-radius 0
        border 0
        background #fff
        cursor pointer
        margin-left 10px
        border-radius 3px
        letter-spacing 1px
        text-shadow 0 -1px 0 rgba(0, 0, 0, 0.12)
        transition all 0.5s
      .confirm-close
        border borderStyle
      .confirm-close:hover
        border 1px solid hoverColor
        color hoverColor
      .confirm-sure
        border 1px solid themeColor
        background themeColor
        color #fff
      .confirm-sure:hover
        background hoverColor
@keyframes confirmFrames
  from
    opacity 0
    top 50%
    left 30%
  to
    opacity 1
    top 30%
    left 50%
</style>
