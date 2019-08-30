<template>
  <div class="ui-title-box">
    <i :class="'iconfont '+icon"></i>
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'icon-aislogo'
    },
    title: {
      type: String,
      default: 'icon-aislogo'
    }
  }
}
</script>

<style lang="stylus">
$heightT = 40px
.ui-title-box
  height $heightT
  line-height $heightT
  display flex
  flex-direction row
  margin-bottom 1rem
  border-bottom 1px solid #ccc
  i
    width $heightT
    line-height $heightT
    font-size 1.5rem
    text-align center
  p
    flex-grow 1
    line-height $heightT
    text-align left
</style>
