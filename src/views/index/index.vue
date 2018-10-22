<template>
  <div class="page">
    <x-button type="primary" @click.native="handleStart">开始</x-button>
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
    }
  }
}
</script>

<style scoped>
</style>
