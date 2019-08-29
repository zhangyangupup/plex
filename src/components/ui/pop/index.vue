<template>
  <div v-if="showPop"
       class="ui-pop">
    <div class="pop-box">
      <!-- 选择项 -->
      <ul>
        <li @click="chooseThis(item)"
            v-for="(item,index) in list"
            :key="index">
          {{item}}
        </li>
      </ul>
      <!-- 取消按钮 -->
      <div class="btn-box">
        <button @click="hidePop">
          取消
        </button>
      </div>
    </div>
    <!-- 遮罩 -->
    <div class="mask"
         @click="hidePop">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => { }
    }
  },
  data () {
    return {
      showPop: false
      // list: [
      //   '这是选择一', '这是选择2', '这是选择3', '这是选择4'
      // ]
    }
  },
  mounted () {
    this.showPop = this.show
  },
  watch: {
    show: function () {
      debugger
      this.showPop = this.show
    }
  },
  methods: {

    hidePop () {
      this.showPop = false
      debugger
      this.$emit('change', this.showPop)
    },
    chooseThis (q) {
      this.$emit('choose', q)
      this.hidePop()
    }
  }
}
</script>

<style lang="stylus">
.ui-pop
  position fixed
  bottom 0
  width 100vw
  left 0
  display flex
  flex-direction row
  z-index 999
  .pop-box
    flex-grow 1
    z-index 889
    animation identifier 0.5s ease
    background-color #ffffff
    ul
      padding 10px 30px 0 30px
      li
        height 35px
        line-height 35px
        color #212121
        border-bottom 1px solid #ccc
      li:nth-last-child
        border-bottom 0
    .btn-box
      button
        background-color #212121
        color #fff
  .mask
    position fixed
    width 100vw
    height 100vh
    z-index 888
    pointer-events auto
    top 0
    left 0
    background-color rgba(0, 0, 0, 0.7)
@keyframes identifier
  0%
    transform translateY(100%)
  100%
    transform translateY(0)
</style>
