<template>
  <!--
    全局提示toast组件
    使用this.$toast(options)
  -->
  <div class="ui-toast zy-components">
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
    }

  },
  data () {
    return {
      showCounts: false
    }
  },
  mounted () {

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
  top 20%
  z-index 999
  text-align center
  border-radius 5px
  animation keyframes1 0.6s
  transition all 0.3s
  transform translate(-50%, -50%)
  background-color rgba(0, 0, 0, 0.9)
@keyframes keyframes1
  from
    top -50%
  to
    top 20%
</style>
