<template>
    <div class="container">
    <form id="tambah-artikel" @submit.prevent="onFormSubmit">
      
        <input v-model="articleId" id="id" type="hidden"  class="form-control" name="id">
      <div class="form-group">
        <label for="title">Judul Artikel</label>
        <input v-model="title" id="title" type="text"  class="form-control" name="title">
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <textarea v-model="content" id="content" class="form-control" name="content" rows="3"></textarea>
      </div>

      <button class="btn btn-primary" type="submit">Tambah Artikel</button>
    </form>
  </div>
</template>

<script>
import httpClient from '~/utils/httpClient'
export default{
    layout(context){
        return 'custom'
    },
    data(){
        return {
            title: "",
            content: "",
            articleId: ""
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
        async onFormSubmit(){
            // const formTambah = document.getElementById("tambah-artikel")
            // const formData = new FormData(formTambah)
            const dataForm = {
                title: document.getElementById('title').value,
                content: document.getElementById('content').value,
            }
            const response = await fetch("https://vbragjrcmqiorydcblvt.supabase.co/rest/v1/article?id=eq." + this.articleId, {
                method: "PATCH",
                headers: {
                    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZicmFnanJjbXFpb3J5ZGNibHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzODc0MTAsImV4cCI6MjAxMDk2MzQxMH0.fEV8q2eu-0UvrlOoG3KDCi8yaTXQAlhkoWOPTco1Uv0",
                    "Content-Type" : "application/json",
                    Prefer: "return=representation"
                },
                body: JSON.stringify(dataForm)
            })

            const data =  await response?.json()
            this.$router.push(`/student/detail/${data[0]?.id}`)
        }
    }

}
</script>