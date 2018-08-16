import Vue from 'vue'
import DialogModal from '@/components/dialog/index.js'

class EditModel {
  open (type, title = '', metaData = {}, options = {
    template: '',
    width: '40%',
    show: false
  }, submitFn, cancelFn) {
    options.template = options.template || ''
    options.show = options.show || false
    options.width = options.width || '40%'
    this.template = options.template || `<dialog-modal :title = "title" :metaData = "metaData" :options = "options" :submitFn = "submitFn" :cancelFn = "cancelFn"></dialog-modal>`
    const data = {
      title,
      metaData,
      options,
      submitFn,
      cancelFn
    }
    this.DialogModal = Vue.extend({
      template: this.template,
      data: () => data,
      components: {
        'dialog-modal': DialogModal[type]
      }
    })
    const modal = new this
      .DialogModal()
      .$mount()
    document
      .getElementById('app')
      .appendChild(modal.$el)
  }
}
const edit = new EditModel()
edit.install = (VUE) => {
  Vue.edit = edit
  if (edit.install.installed) {
    return
  }
  edit.install.installed = true
  Object.defineProperty(VUE.prototype, '$edit', {
    get: () => edit
  })
}
export default edit
