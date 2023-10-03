<template>
    <div class="container py-5">
      <div class="row justify-content-between">
        <CardArtikel
        v-for="(item, idx) of article"
        :key="idx"
        :title="item?.title"
        :content="item?.content"
        :articleId="item?.id"
        class="col-md-4"
      />
    </div>
  </div>
</template>
<script>
import CardArtikel from '~/components/CardArticle.vue';
export default{
    layout(context){
        return 'custom'
    },
    name: 'IndexPage',
    components : { CardArtikel },
    data() {
      return {
        article: [],
      }
    },
    mounted() {
      this.getArticle();
    },
    methods: {
      async getArticle() {
        const response = await this.$axios.get("/rest/v1/article", {
          headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZicmFnanJjbXFpb3J5ZGNibHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzODc0MTAsImV4cCI6MjAxMDk2MzQxMH0.fEV8q2eu-0UvrlOoG3KDCi8yaTXQAlhkoWOPTco1Uv0"
          }
        })
        this.article = response?.data
      },
    }
}

</script>