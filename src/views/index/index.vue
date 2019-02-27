<template>
  <div class="page">
    <x-button type="primary" @click.native="handleStart">开始</x-button>
    <x-button type="primary" @click.native="handleDemo">练习-封装一个组件</x-button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    handleStart() {
      this.$router.push('/userInfo')
    },
    handleDemo() {
      this.$router.push('/demo-count')
    }
  }
}
</script>

<style scoped>
</style>
