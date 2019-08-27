import Toast from './toast.vue'

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

export default toast
