<template>
  <div class="page">
    <count-to :end="3000" :duration="2.5" />
  </div>
</template>

<script>
import CountTo from '@/components/CountTo'
export default {
  components: { CountTo },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
