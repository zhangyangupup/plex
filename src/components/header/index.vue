<template>
  <div class="page-header">
    <img src="../../assets/images/aislogo.png"
         alt="logo">
    <p class="name-box">Wcshjui</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.page-header
  display flex
  flex-direction row-reverse
  height 100%
  img
    height 70%
    position relative
    top 15%
    border-radius 50%
    margin 0 20px
    // border 1px solid #fff
  .name-box
    height 50px
    line-height 50px
    font-size 0.9rem
    font-weight 600
</style>
