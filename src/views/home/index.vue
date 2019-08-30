<template>
  <div class="home-page">
    <div class="home-content-page">
      <title-box icon="icon-bianji1"
                 title="通知" />
      <!-- top box -->
      <div class="top-line-box">
        <p class="word-box">
          这是一个文字实例，请注意这是文字实例，下面是文字文字实例链接，这是主页，主页无特殊信息需要显示；这是一个文字实例，请注意这是文字实例，下面是文字实例链接，这是主页，主页无特殊信息需要显示；这是一个文字实例，请注意这是文字实例，下面是文字实例链接，这是主页，主页无特殊信息需要显示；这是一个文字实例，请注意这是文字实例，下面是文字实例链接，这是主页，主页无特殊信息需要显示；
        </p>
        <p class="word-link">
          点击查看更多内容
        </p>
      </div>
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
.home-page
  background-color #fff
  display flex
  flex-direction row
  .home-content-page
    flex-grow 1
    overflow hidden
    overflow-y auto
    padding 1rem
    .top-line-box
      // background #f8f8f8
      border 1px solid $borderColor
      padding 1rem 10%
      font-size 0.9rem
      color #616161
      border-radius 3px
      box-shadow 1px 1px 3px #ddd
      .word-box
        min-height 90px
</style>
