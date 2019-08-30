<template>
  <div class="com-page zy-page">

    <div class="btns-box">
      <title-box title="组件测试" />
      <ui-button text='蓝色按钮' />
      <ui-button text='灰色按钮'
                 iconLeft='icon-jinggao'
                 bgColor="rgba(0,0,0,0.7)" />
      <ui-button text='图标按钮'
                 iconLeft='icon-jinggao' />
      <ui-button text='toast测试'
                 @click.native="toast()" />
      <ui-button text='confirm测试'
                 @click.native="confirm()" />
      <ui-button text='loading测试'
                 @click.native="loading()" />
      <ui-button text='message测试'
                 bgColor='rgb(82, 196, 26)'
                 @click.native="message()" />
      <ui-button text='message-error'
                 bgColor='rgb(229, 64, 79)'
                 @click.native="message({
                          text: '这是消息组件实例',
                          type: 'error',
                          autoClose:false
               })" />
      <ui-button text='message-warn'
                 bgColor='rgb(255, 142, 20)'
                 @click.native="message({
                          text: '这是消息组件实例',
                          type: 'warning'
               })" />
    </div>

  </div>
</template>

<script>
import UiButton from '../../components/ui/button/button'
import TitleBox from '../../components/titleBox/index.vue'

export default {
  components: {
    UiButton,
    TitleBox
  },
  data () {
    return {
      options: {
        text: 'sa'
      }
    }
  },
  methods: {
    toast () {
      this.$ui.toast('这是测试', 5000)
    },
    confirm () {
      this.$ui.confirm.show({
        closeText: '关闭',
        sureText: '确认',
        words: '这是提示信息',
        cancleFun: () => { console.log('没有任何操作'); this.$ui.confirm.close() },
        sureFun: () => { console.log('确认操作') }
      })
    },
    loading () {
      // let vm = this
      this.$ui.loading.show({ icon: 'icon-loading1', text: '疯狂加载中...' })
      // setTimeout(() => {
      //   vm.$ui.loading.hide()
      // }, 2000)
    },
    message (item) {
      this.$ui.message.show(item)
    }
  }
}
</script>

<style lang="stylus">
.com-page
  background #f6f6f6
  display flex
  flex-direction row
  .btns-box
    flex-grow 1
    overflow hidden
    overflow-y auto
    .ui-button
      flex 0 200px
      margin 10px
      width 200px
</style>
