<template>
  <!--
    主界面
   -->
  <div class="main-page">
    <!-- 左侧·bar -->
    <div class="left-bar">
      <div class="logo-box">
        <img src="../../assets/images/paper-plane.png"
             alt="logo">
      </div>
      <ul>
        <li @click="goPage(item)"
            v-for="(item,index) in barList"
            :key='index'>
          <i @mouseover="showToast(item)"
             @mouseleave="hideToast()"
             :class="'iconfont '+ item.icon"></i>
        </li>
      </ul>
    </div>
    <!-- 右侧·内容框 -->
    <div class="right-box">
      <!-- content top bar -->
      <div class="top-bar">
        <com-header />
      </div>
      <!-- content box -->
      <div class="content-body">
        <transition name='fade'
                    mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
    <p v-if="showLiToast"
       class="li-item-toast">{{liToast}}</p>
  </div>
</template>

<script>
import ComHeader from '../../components/header/index'

export default {
  components: {
    ComHeader
  },
  data () {
    return {
      showLiToast: false,
      liToast: 'as',
      options: {
        closeText: '关闭1',
        sureText: '确认1',
        words: "<p style='color:red;'>这是提示信息这是提示信息这</p>这是提示信息这是提示信息这是提示信息这是提示信息这是提示信息这是提示信息这是提示信息这是提示信息这是提示信息这是提示信息这是提示信息",
        cancleFun: () => { console.log('没有任何操作') },
        sureFun: () => { console.log('确认操作') }
      },
      barList: []
    }
  },
  mounted () {
    this.initPage()
  },
  methods: {
    /**
     * 页面初始化
     */
    initPage () {
      // 获取barlist
      let url = 'nos/listConfig'
      this.$http.post(url, {
        'type': 'barList',
        'queryType': 'query'
      }).then(res => {
        console.log(res)
        this.barList = res.data.data.sort((x, y) => {
          return x.sort - y.sort
        })
      })
    },
    /**
     * 路由跳转
     */
    goPage (item) {
      console.log(item)
      this.$router.push({
        name: item.path
      })
    },
    /**
     * 弹框
     */
    showToast (item) {
      this.showLiToast = true
      this.liToast = item.text
      let e = event
      this.$nextTick(() => {
        let ele = document.querySelector('.li-item-toast')
        ele.style.top = e.target.offsetTop + 'px'
        ele.style.left = (e.target.offsetLeft + e.target.offsetWidth + 20) + 'px'
      })
    },
    /**
     * 隐藏弹框
     */
    hideToast () {
      this.showLiToast = false
    }
  }
}
</script>
<style lang="stylus">
.main-page
  width 100vw
  height 100vh
  background #f6f6f6
  display flex
  flex-direction row
  .left-bar
    background $leftBar
    width $barWidth
    display flex
    flex-direction column
    color #fff
    border-top-left-radius 5px
    border-bottom-left-radius 5px
    z-index 596
    .logo-box
      padding 10px 10px
      img
        width 90%
        margin 0 auto
        background-color #ffffff
        border-radius 50%
    ul
      flex-grow 1
      overflow-y auto
      padding 0px 10px
      margin-top 10px
      li:nth-child(1)
        border-top 0
      li
        border-top 1px solid #fff
        height calc(60px - 11px)
        cursor pointer
        line-height calc(60px - 11px)
        i
          font-size 150%
          transition all 0.5s
      li:hover
        i
          color #FF5722
  .right-box
    flex-grow 1
    display flex
    overflow hidden
    flex-direction column
    .top-bar
      height 50px
      line-height 50px
      border-bottom 1px solid #ccc
      z-index 598
      box-shadow 1px 1px 3px #aaa
    .content-body
      flex-grow 1
      overflow-x hidden
      overflow-y hidden
      padding 10px
  .li-item-toast
    background-color rgba(0, 0, 0, 0.8)
    position absolute
    color #fff
    padding 3px 10px
    border-radius 3px
    z-index 600
    font-size 0.9rem
    // transition all 0.4s
    pointer-events none
    animation litoast 0.4s linear
@keyframes litoast
  0%
    opacity 0
  100%
    opacity 1
</style>
