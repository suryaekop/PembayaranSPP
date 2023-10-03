<template>
  <div class="container py-4">
    <div class="card">
      <img src="https" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ content }}</p>
      </div>
      <button type="button" class="btn btn-primary" @click="onEdit">Edit artikel</button>
    </div>
    <div class="btn btn-outline-secondary btn-sm mb-3" @click="$router.go(-1)">Kembali</div>

  </div>
</template>

<script>
  import httpClient from "~/utils/httpClient"
  export default {
    layout(context){
      return 'custom'
    },
    data() {
      return {
        title: "",
        content: "",
        articleId: "",
      }
    },
    mounted() {
      const params = this.$route.params
      this.getDetailData(params?.id)
    },
    methods: {
      async getDetailData(articleId) {
        const response = await httpClient("/rest/v1/article?id=eq." + articleId, "GET")
        const data = await response.json()
        this.title = data[0]?.title
        this.content = data[0]?.content
        this.articleId = data[0]?.id
      },
      onEdit() {
      this.$router.push(`/form/${this.articleId}/Edit`)
    }
    }
  }
  </script>