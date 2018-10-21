<template>
  <div class="page">
    <x-button type="primary" @click.native="handleLogin">开始</x-button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    handleLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
</style>
