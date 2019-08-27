import Confirm from './confirm.vue'

const confirm = function (Vue) {
  // 组件实例挂载到vue实例上
  const ConfirmConstructor = Vue.extend(Confirm)
  // 组建子类，可以通过该子类访问组件对象
  const confirmEle = new ConfirmConstructor()
  // 将组建节点挂载到文档流中
  confirmEle.$mount(document.createElement('div'))
  document.body.appendChild(confirmEle.$el)
  // 对组件实例进行具体操作
  Vue.prototype.$confirm = {
    // confirm主动显示
    show (options) {
      console.log('as')
      // 通过上面组件子类传递参数
      confirmEle.options = options
      confirmEle.show = true
    },
    // confirm主动关闭
    close () {
      confirmEle.show = false
    }
  }
}
export default confirm
