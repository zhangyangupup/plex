import ToastComponent from './ui/toast/toast.vue'
import Confirm from './ui/confirm/confirm.vue'
import Loading from './ui/loading/loading.vue'
import Message from './ui/message/message.vue'
const Xui = function (Vue) {
  Vue.prototype.$ui = {}
}
/**
 * toast全局组件
 * text:字符串提示文字
 * time:number 自动消失时间
 */
const Toast = {
  install (Vue) {
    Vue.prototype.$ui.toast = (text, time, position) => {
      if (!time) {
        time = 2000
      }
      const ToastConstructor = Vue.extend(ToastComponent)
      const ToastPlugin = new ToastConstructor()
      ToastPlugin.text = text
      if (position) {
        if (position === 'top' || position === 'middle' || position === 'bottom') {
          ToastPlugin.position = position
        }
      }
      ToastPlugin.$mount(document.createElement('div'))
      document.body.appendChild(ToastPlugin.$el)

      setTimeout(() => {
        ToastPlugin.$el.parentNode.removeChild(ToastPlugin.$el)
      }, time)
    }
  }
}
/**
 * confirm全局组件
 * options:{
 *  closeText:关闭按钮文字
 *  sureText:确认按钮文字
 *  words:提示信息
 *  cancleFun:取消按钮事件
 *  sureFun:确认按钮事件
 * }
 */
const confirm = {
  install (Vue) {
    const ConfirmConstructor = Vue.extend(Confirm)
    const confirmEle = new ConfirmConstructor()
    confirmEle.$mount(document.createElement('div'))
    document.body.appendChild(confirmEle.$el)
    Vue.prototype.$ui.confirm = {
      show (options) {
        if (!options) {
          options = {
            closeText: '关闭',
            sureText: '确认',
            words: '这是提示信息',
            cancleFun: () => { confirmEle.show = false },
            sureFun: () => { console.log('确认操作') }
          }
        }
        confirmEle.options = options
        confirmEle.show = true
      },
      close () {
        confirmEle.show = false
      }
    }
  }
}
/**
 * loading全局组件
 * options:{
 *  icon:图标
 *  text:文字
 *  bgColor:背景颜色
 *  fontColor:文字颜色
 *  iconColor:图标颜色
 * }
 */
const loading = {
  install (Vue) {
    const LoadingConstructor = Vue.extend(Loading)
    const loadingEl = new LoadingConstructor()
    loadingEl.$mount(document.createElement('div'))
    document.body.appendChild(loadingEl.$el)
    Vue.prototype.$ui.loading = {
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
        if (!options.fontColor) {
          options.fontColor = '#fff'
        }
        if (!options.iconColor) {
          options.fontColor = '#fff'
        }
        loadingEl.options = options
        loadingEl.show = true
      },
      hide () {
        loadingEl.show = false
      }
    }
  }
}
/**
 * message全局组件
 * type:消息类型
 * autoClose:是否自动关闭
 * text:消息文字，支持html文本
 */
const message = {
  install (Vue) {
    Vue.prototype.$ui.message = {
      show (options) {
        const MessageConstructor = Vue.extend(Message)
        const messageEl = new MessageConstructor()
        messageEl.$mount(document.createElement('div'))
        document.body.appendChild(messageEl.$el)
        if (!options) {
          options = {
            text: '这是消息组件实例',
            type: 'success',
            autoClose: true,
            showIcon: true
          }
        }
        messageEl.show = true
        messageEl.options = options
        // 是否自动关闭
        if (options.autoClose === true || options.autoClose === undefined) {
          setTimeout(() => {
            messageEl.show = false
            messageEl.$el.parentNode.removeChild(messageEl.$el)
          }, 4000)
        }
        // 是否显示图标
        if (options.autoClose === undefined) {
          options.showIcon = true
        }
        return messageEl
      },
      hide () {
        const messageEl = this.show()
        messageEl.show = false
        messageEl.$el.parentNode.removeChild(messageEl.$el)
      }
    }
  }
}
/**
 * Notification全局组件
 */
export { Xui, Toast, confirm, loading, message }
