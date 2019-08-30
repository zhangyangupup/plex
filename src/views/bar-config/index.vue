<template>
  <div class="bar-config-page">
    <div class="config-page-content">
      <title-box title='页面配置' />
    </div>
  </div>
</template>

<script>
import TitleBox from '../../components/titleBox/index.vue'

export default {
  components: {
    TitleBox
  }
}
</script>

<style lang="stylus">
.bar-config-page
  width 100%
  height 100%
  display flex
  flex-direction row
  overflow hidden
  overflow-y auto
  .config-page-content
    flex-grow 1
    padding 1rem
</style>
