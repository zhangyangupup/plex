import Toast from './ui/toast/toast.vue'
import Confirm from './ui/confirm/confirm.vue'
import Loading from './ui/loading/loading.vue'
import Message from './ui/message/message.vue'
const toast = function (Vue) {
  Vue.prototype.$toast = (config, time) => {
    let timeout = time || 2000
    const ToastConstructor = Vue.extend(Toast)
    const instance = new ToastConstructor()
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    instance.text = config
    setTimeout(() => {
      instance.$el.parentNode.removeChild(instance.$el)
    }, timeout)
  }
}

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
      // 通过上面组件子类传递参数
      confirmEle.options = options
      confirmEle.show = true
    },
    // confirm主动关闭
    close () {
      confirmEle.show = false
      confirmEle.$el.parentNode.removeChild(confirmEle.$el)
    }
  }
}

const loading = function (Vue) {
  const LoadingConstructor = Vue.extend(Loading)
  const loadingEl = new LoadingConstructor()
  loadingEl.$mount(document.createElement('div'))
  document.body.appendChild(loadingEl.$el)
  Vue.prototype.$loading = {
    show (options) {
      if (!options) {
        options = {
          icon: 'icon-Loading1',
          text: '加载中...',
          bgColor: 'rgba(0,0,0,0.5)',
          fontColor: '#fff',
          iconColor: '#fff'
        }
      }
      loadingEl.options = options
      loadingEl.show = true
    },
    hide () {
      loadingEl.show = false
    }
  }
}

const message = function (Vue) {
  Vue.prototype.$message = {
    show (options) {
      const MessageConstructor = Vue.extend(Message)
      const messageEl = new MessageConstructor()
      messageEl.$mount(document.createElement('div'))
      document.body.appendChild(messageEl.$el)
      if (!options) {
        options = {
          text: '这是消息组件实例',
          type: 'success'
        }
      }
      messageEl.show = true
      messageEl.options = options
      setTimeout(() => {
        messageEl.show = false
        messageEl.$el.parentNode.removeChild(messageEl.$el)
      }, 4000)
      return messageEl
    },
    hide () {
      const messageEl = this.show()
      messageEl.show = false
      messageEl.$el.parentNode.removeChild(messageEl.$el)
    }
  }
}
export { confirm, toast, loading, message }
