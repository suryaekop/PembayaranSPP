<template>
    <div class="container py-5">
      <div class="row justify-content-between">
        <CardArtikel
        v-for="(item, idx) of article"
        :key="idx"
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
            apikey: process.env.supabaseKey
          }
        })
        console.log(response); 
      },
    }
}

</script>