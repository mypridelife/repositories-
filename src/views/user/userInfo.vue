<template>
  <div class="page">
    <panel :header="title" :list="vuxList" type="1"/>
  </div>
</template>

<script>
import api from '@/api/api'
export default {
  data() {
    return {
      msg: 'Repositories：',
      title: '',
      list: [],
      vuxList: []
    }
  },
  created() {
    this.getRepository()
  },

  methods: {
    getRepository() {
      const params = {
        sort: 'updated'
      }
      this.axios.get(api.repo_list, params)
        .then(response => {
          this.list = response.data
          console.log(this.list)
          this.$nextTick(function() {
            for (var i = 0; i < this.list.length; i++) {
              var listTem = {
                src: '',
                fallbackSrc: '',
                title: '',
                desc: '',
                url: ''
              }
              listTem.src = this.list[i].owner.avatar_url// 图片
              listTem.fallbackSrc = 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff'
              listTem.title = this.list[i].name// 名字
              listTem.desc = this.list[i].description// 描述
              listTem.url = this.list[i].html_url// 链接
              this.vuxList.push(listTem)
            }
            this.$store.commit('handleTitle', this.list[0].owner.login)
          })
        })
    }
  }
}
</script>

<style scoped>
</style>
