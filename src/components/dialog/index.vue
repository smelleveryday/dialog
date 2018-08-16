<template>
  <div class="dialogbg" @click="cancel">
    <div :style="{width:options.width}" :visible.sync="options.show" class="dialog" @click.stop="cancels">
      <div class="dialog-fork" @click="cancel"><p class="dialog-close"></p></div>
      <div class="dialog-title">{{title}}</div>
      <p>123</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    metaData: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Object,
      default: () => {}
    },
    submitFn: {
      type: Function,
      default: () => undefined
    },
    cancelFn: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      a: '1'
    }
  },
  created () {

  },
  methods: {
    cancel () {
      this.distroyed()
    },
    cancels () {},
    distroyed () {
      document
        .getElementById('app')
        .removeChild(this.$el)
    }
  }
}
</script>
<style scoped>

</style>
