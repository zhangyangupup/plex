<template>
  <div class="login-page">
    <div class="login-box">
      <!-- title -->
      <div class="title-box">
        <div class="img-box">
          <img src="../../assets/images/paper-plane.png"
               alt="">
        </div>
        <p>登陆</p>
      </div>
      <div class="cell-box">
        <cell-box v-model='idNumber'
                  placeholder="请输入账户/邮箱/手机"
                  autocomplete='off'
                  name="账户" />
        <cell-box v-model='passWord'
                  placeholder="请输入密码"
                  autocomplete='off'
                  type="password"
                  name="密码" />
        <div class="words-box">
          <p class="left">
            <span>
              Join Us
            </span>
          </p>
          <p class="right">
            <span>
              Forget PassWord
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CellBox from '../../components/ui/cellBox/index.vue'
export default {
  components: {
    CellBox
  },
  data () {
    return {
      idNumber: '',
      passWord: ''
    }
  },
  watch: {
    wename: function () {
      console.log(this.wename)
    }
  }
}
</script>

<style lang="stylus">
.login-page
  position fixed
  top 0
  left 0
  z-index 600
  width 100vw
  height 100vh
  background-color #f8f8f9
  background-image url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg')
  .login-box
    width 30vw
    margin 0 auto
    position relative
    top 50%
    transform translate(0%, -100%)
    .title-box
      display flex
      flex-direction row
      margin-bottom 3rem
      height 3rem
      .img-box
        flex 0 50%
        img
          height 100%
          float right
          transform translateX(-100%)
      p
        font-size 1.2rem
        display block
        font-weight 600
        text-align left
        line-height 3rem
        padding-left 10px
        letter-spacing 15px
        flex-grow 1
        transform translateX(-10%)
    .cell-box
      .ui-cell-box
        margin-top 3rem
      .words-box
        display flex
        .left, .right
          font-size 0.8rem
          // font-weight 600
          flex-grow 1
          color $baseColor
          span
            cursor pointer
            transition all 0.3s
          span:hover
            color successColor
        .left
          text-align left
        .right
          text-align right
</style>
