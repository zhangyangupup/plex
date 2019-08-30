<template>
  <!-- value:v-model绑定值
    placeholder：默认显示提示词
    name：左侧标题
    type：类型
    important：是否右侧 * 标识
    clear：是否显示清空图标
    width：cell组件宽度，不传则为空
    autocomplete:是否自动填充
 -->
  <div :style="'width:'+width+'px'"
       class="ui-cell-box">
    <!-- left -->
    <div v-if="showLeft"
         :class="important?'key-word important-key':'key-word'">
      {{name}}
      <span></span>
    </div>
    <!-- right -->
    <div class="input-box">
      <i v-if="showLeftIcon"
         :class="'iconfont '+leftIcon +' left-icon'"></i>
      <input :type="type"
             :placeholder="placeholder"
             @input="inputChange"
             :autocomplete="autocomplete"
             :value="modelValue"
             class="ui-input-box">
    </div>
    <i @click="clearAll"
       v-if="clear && showClear"
       class="iconfont icon-guanbi6 clear-icon"></i>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    showLeftIcon: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: 'icon-switchuser'
    },
    showLeft: {
      type: Boolean,
      default: true
    },
    autocomplete: {
      type: String,
      default: 'on'
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    name: {
      type: String,
      default: '账 户'
    },
    type: {
      type: String,
      default: 'text'
    },
    important: {
      type: Boolean,
      default: false
    },
    clear: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: ''
    }
  },
  watch: {
    value: function () {
      this.modelValue = this.value
      if (this.modelValue.length > 0) {
        this.showClear = true
        console.log(this)
        this.$el.querySelector('.ui-input-box').type = this.type
      } else {
        this.showClear = false
        this.$el.querySelector('.ui-input-box').type = 'text'
      }
    }
  },
  mounted () {
    this.modelValue = this.value
    if (this.showLIcon === false) {
      let nodes = document.querySelectorAll('.ui-input-box')
      nodes.forEach(ele => {
        ele.style.paddingLeft = '10px'
      })
    }
  },
  data () {
    return {
      showClear: false,
      modelValue: ''
    }
  },
  methods: {
    inputChange (event) {
      let value = event.target.value
      this.$emit('input', value)
    },
    clearAll () {
      this.$emit('input', '')
    }
  }
}
</script>

<style lang="stylus">
$height = 40px
.ui-cell-box
  width 100%
  display flex
  flex-direction row
  height $height
  .key-word
    min-width 60px
    max-width 120px
    line-height $height
    display block
    color #555
    font-weight 600
    text-align justify
    text-justify inter-ideograph
  .key-word:after
    content ''
    padding-left 100%
    display inline-block
  .important-key:after
    content '*'
    color red
    padding-left 100%
    display inline-block
  .input-box
    flex-grow 1
    display flex
    input
      height $height
      padding 0 $height
      border-radius 3px
      border 1px solid #ddd
      outline none
      flex-grow 1
      display block
      color #777
      transition all 0.3s
      font-size 0.8rem
    input:focus
      border 1px solid #1890ff
      box-shadow 1px 1px 4px #ccc
  .left-icon
    position absolute
    height $height
    line-height $height
    cursor pointer
    color #888
    left 0%
    transition all 0.3s
    transform translateX(100%)
  .clear-icon
    position absolute
    height $height
    line-height $height
    cursor pointer
    color #888
    left 100%
    transition all 0.3s
    transform translateX(-200%)
</style>
