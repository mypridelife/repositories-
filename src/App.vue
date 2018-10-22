<template>
  <div id="app">
    <x-header :left-options="{showBack: false}">
      <x-icon type="github" class="icon-style" />
      {{ title }}
      <a v-show="token" slot="right" @click="handleLogout">logout</a>
    </x-header>
    <box gap="10px 10px">
      <router-view />
    </box>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as types from '@/store/mutation-types'

export default {
  name: 'App',
  computed: mapState({
    title: state => state.title,
    token: state => state.token
  }),
  methods: {
    handleLogout() {
      this.$store.commit(types.LOGOUT)
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="less">
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/close.less";
.icon-style {
  width: 30px;
  vertical-align: middle;
  margin-right: 6px;
}
</style>
