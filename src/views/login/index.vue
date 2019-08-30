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
                  :showLeftIcon='true'
                  autocomplete='off'
                  :showLeft='false'
                  name="账户" />
        <cell-box v-model='passWord'
                  placeholder="请输入密码"
                  autocomplete='off'
                  :showLeftIcon='true'
                  type="password"
                  leftIcon="icon-lock"
                  :showLeft='false'
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
        <!-- 确定按钮 -->
        <div class="submit-btn">
          <ui-button @click.native="login"
                     width='100%' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CellBox from '../../components/ui/cellBox/index.vue'
import UiButton from '../../components/ui/button/button.vue'

export default {
  components: {
    CellBox,
    UiButton

  },
  data () {
    return {
      idNumber: '',
      passWord: ''
    }
  },
  methods: {
    login () {
      let data = {
        id: this.idNumber,
        passWord: this.passWord
      }
      this.$http.post('nos/login', data).then(res => {
        console.log(res)
        if (res.data.flag === true) {
          this.$router.push({ name: 'main' })
        }
      })
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
    width 350px
    margin 0 auto
    position relative
    top 50%
    padding-bottom 3rem
    transform translate(0%, -50%)
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
        transform translateX(-30%)
    .cell-box
      .ui-cell-box
        margin-top 3rem
      .words-box
        line-height 1rem
        display flex
        .left, .right
          font-size 0.7rem
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
      .submit-btn
        padding 2rem 0
        top 3rem
</style>
