<template>
  <div class="home-page">
    <!-- 导航栏 -->
    <div class="nav-bar">
      <!-- logo -->
      <div class="header-logo-box">
        <!-- <img src="../assets/logo.png" alt="logo"> -->
      </div>
      <!-- herder right -->
      <div class="header-right-box">

      </div>
    </div>
    <!-- 内容区域 -->
    <div class="content-box">
      <!-- bun -->
      <ui-btn @click.native="toast()"
              text="示例实例" />
      <!-- 内容筛选 -->
      <!-- <div class="content-nav-box">
        <ul>
          <li v-for="(item,index) in 2" :key="index">
          </li>
        </ul>
      </div> -->
    </div>
    <!-- UI test -->
  </div>
</template>
<script>
import UiBtn from '@/components/ui/button/button.vue'

export default {
  components: {
    UiBtn
  },
  mounted () {

  },
  methods: {
    toast () {
      this.$toast('这是测试数据44')
      console.log(this.$root)
    }
  }
}
</script>
<style lang="stylus">
$headerHeight = 4rem
.home-page
  width 70vw
  height 100vh
  margin 0 auto
  display flex
  padding 0 20px
  flex-direction column
  background-color rgba(249, 249, 249, 0.99)
  .nav-bar
    display flex
    flex-direction row
    height $headerHeight
    line-height $headerHeight
    border-bottom 1px solid #ddd
    .header-logo-box
      padding 0.3rem 1rem
      img
        height 100%
    .header-right-box
      flex-grow grow
      display flex
      flex-direction row
  .content-box
    padding 1rem
</style>
