<template>
  <!--
    iconLeft:左边图标
    iconRight:右边图标
    text:内容
    bgColor：背景色，默认蓝色
    fontColor：字体颜色
    width:按钮宽度，默认100
    fuc：事件传递，可用.native
   -->
  <div @click="fuc"
       :style="styleS+' '+btnBG"
       class="ui-button">
    <div class="ui-btn-child">
      <i :style="'color:'+fontColor"
         :class="'iconfont '+iconLeft"></i>
      <p :style="'color:'+fontColor">{{text}}</p>
      <i :style="'color:'+fontColor"
         :class="'iconfont '+iconRight"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    iconLeft: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: ''
    },
    styleS: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: '按钮示例'
    },
    bgColor: {
      type: String,
      default: '#1976D2'
    },
    fontColor: {
      type: String,
      default: '#ffffff'
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    fuc: {
      type: Function,
      default: () => { }
    }
  },
  data () {
    return {
      btnBG: '',
      btnColor: '',
      btnWidth: '',
      btnHeight: ''
    }
  },
  mounted () {
    // 处理背景色与宽度
    this.btnHeight = `${parseInt(this.height) - 2}`
    this.btnBG = `background:${this.bgColor};height:${this.btnHeight}px;lineHeight:${this.btnHeight}`
  }
}
</script>
<style lang="stylus">
.ui-button
  height 40px
  display block
  overflow hidden
  border-radius 5px
  border 1px solid #fff
  transition all 0.3s
  .ui-btn-child
    height 100%
    padding 0 10px
    cursor pointer
    align-items center
    border-radius 5px
    overflow hidden
    display flex
    flex-direction row
    transition all 0.3s
    i:nth-child(1), i:nth-child(3)
      flex-grow 1
      height 100%
      padding 4px
      font-size 1.2rem
      position relative
      top 1px
    i:nth-child(1)
      text-align right
    p
      flex-grow 1
      font-size 0.9rem
.ui-button:hover
  border 1px solid #bbb
  box-shadow 1px 1px 4px 1px #bbb
.ui-button:active
  border 1px solid #bbb
  box-shadow 0px 0px 0px 0px #bbb
.ui-btn-child:hover
  box-shadow -1px -1px 4px 1px #bbb
.ui-btn-child:active
  box-shadow -1px -1px 4px 1px #bbb
</style>
