<template>
  <div class="com-page zy-page">
    <ui-button text='蓝色按钮' />
    <ui-button text='灰色按钮'
               iconLeft='icon-jinggao'
               bgColor="rgba(0,0,0,0.7)" />
    <ui-button text='图标按钮'
               iconLeft='icon-jinggao' />
    <ui-button text='toast测试'
               @click.native="toast()" />
    <ui-button text='confirm测试'
               @click.native="confirm1()" />
    <ui-button text='loading测试'
               @click.native="loading()" />
    <ui-button text='message测试'
               bgColor='rgb(82, 196, 26)'
               @click.native="message()" />
    <ui-button text='message-error'
               bgColor='rgb(229, 64, 79)'
               @click.native="message({
                          text: '这是消息组件实例',
                          type: 'error'
               })" />
    <ui-button text='message-warn'
               bgColor='rgb(255, 142, 20)'
               @click.native="message({
                          text: '这是消息组件实例',
                          type: 'warning'
               })" />
  </div>
</template>

<script>
import UiButton from '../../components/ui/button/button'
import { setTimeout } from 'timers';
export default {
  components: {
    UiButton
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
      this.$toast('这是测试')
    },
    confirm1 () {
      this.$confirm.show({
        closeText: '关闭',
        sureText: '确认',
        words: '这是提示信息',
        cancleFun: () => { console.log('没有任何操作') },
        sureFun: () => { console.log('确认操作') }
      })
    },
    loading () {
      let vm = this
      this.$loading.show()
      setTimeout(() => {
        vm.$loading.hide()
      }, 2000)
    },
    message (item) {
      this.$message.show(item)
    }
  }
}
</script>

<style lang="stylus">
.com-page
  padding 10px
</style>
