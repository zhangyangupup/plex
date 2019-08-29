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
    <div :class="important?'key-word important-key':'key-word'">
      {{name}}
      <span></span>
    </div>
    <!-- right -->
    <div class="input-box">
      <input :type="type"
             :placeholder="placeholder"
             @input="inputChange"
             :autocomplete="autocomplete"
             :value="modelValue">
    </div>
    <i @click="clearAll"
       v-if="clear && showClear"
       class="iconfont icon-guanbi6"></i>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
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
      } else {
        this.showClear = false
      }
    }
  },
  mounted () {
    this.modelValue = this.value
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
.ui-cell-box
  width 100%
  display flex
  flex-direction row
  height 40px
  .key-word
    min-width 60px
    max-width 120px
    line-height 40px
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
      height 38px
      padding 0 10px
      border-radius 3px
      border 1px solid #ddd
      outline none
      flex-grow 1
      display block
      color #777
      transition all 0.3s
    input:focus
      border 1px solid #1890ff
      box-shadow 1px 1px 4px #ccc
  i
    position absolute
    height 100%
    line-height 40px
    cursor pointer
    color #888
    left 100%
    transition all 0.3s
    transform translateX(-200%)
</style>
