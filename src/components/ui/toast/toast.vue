<template>
  <!--
    全局提示toast组件
    使用this.$toast(options)
  -->
  <div :class="'ui-toast '+className">
    {{text}}
    <p v-show='showCounts'>{{count}}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'asas'
    },
    position: {
      type: String,
      default: 'top'
    }
  },
  data () {
    return {
      showCounts: false,
      className: 'toast-top'
    }
  },
  mounted () {
    debugger
    if (this.position === 'bottom') {
      this.className = 'toast-bottom'
    } else if (this.position === 'middle') {
      this.className = 'toast-middle'
    } else {
      this.className = 'toast-top'
    }
  },
  computed: {
    count: function () {
      let nodes
      this.$nextTick(() => {
        nodes = document.querySelectorAll('.ui-toast')
        nodes.forEach((ele, index) => {
          let toplen = 110 * (nodes.length - index)
          ele.style.transform = `translate(-50%,-${toplen}%)`
        })
      })
      return nodes
    }
  }
}
</script>

<style lang="stylus">
.ui-toast
  padding 3px 20px
  line-height 1.9rem
  font-size 1rem
  color #fff
  position fixed
  left 50%
  z-index 999
  text-align center
  border-radius 5px
  transition all 0.3s
  transform translate(-50%, -50%)
  background-color rgba(0, 0, 0, 0.9)
.toast-top
  top 20%
  animation keyframes1 0.6s
.toast-middle
  top 50%
  animation keyframes2 0.6s
.toast-bottom
  top 80%
  animation keyframes3 0.6s
@keyframes keyframes1
  from
    top -50%
  to
    top 20%
@keyframes keyframes2
  from
    top -50%
  to
    top 50%
@keyframes keyframes3
  from
    top -50%
  to
    top 80%
</style>
