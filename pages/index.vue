<template>
      <div class="py-4">
    <div class="container">
    <div class="title border-bottom d-flex align-item-center justify-content-between py-2">
    <h5>Sistem Informasi Pembayaran SPP</h5>
    <div class="d-flex align-item-center ms-auto">
      <input v-model="searchQuery" type="text"  class="form-control" placeholder="Search">
      <div class="d-flex align-items-center justify-content-end w-100">
      <span class="me-2">View As</span>
      <button class="btn btn-outline-secondary py-1 px-3" @click="isGrid=!isGrid">{{ isGrid?'Grid':'List' }}</button>
      </div>
    </div>
  </div>
    <div class="list-task row">
      <CardItem v-for="(task,i) in resultQuery" :key="i" :task="task" :isGrid="isGrid" />
    </div>
    <div class="action py-2">
      <a v-if="!isCreating" href="#" class="add-button"  @click="isCreating=!isCreating">Add Task</a>
      <div v-else class="add-card">
        <div class="card mb-2">
          <div class="card-body d-flex flex-column p-0">
            <input class="form-control border-0 mb-2" placeholder="Title" type="text">
            <textarea class="form-control border-0 small" placeholder="Description" rows="3"></textarea>
          </div>
        </div>
        <div class="button-wrapper d-flex">
          <button class="btn btn-primary me-2">Save</button>
          <button class="btn btn-outline-secondary" @click="isCreating=!isCreating">Cancel</button>
        </div>
      </div>
    </div>
    </div>
    </div>
</template>
<script>
import CardItem from "@/components/Card/CardItem.vue"
export default {
  layout (context) {
    return 'custom'
  },
  components : {
    CardItem
  },
  data(){
    return{
      // untuk mencari data
      searchQuery : '',
      // untuk mengubah layout view
      isGrid : true,
      // status sebelum menambahkan task
      isCreating: false,
      // daftar task
      tasks : [
        {
          title : 'Task 1',
          description : 'Deskripsi Task 1',
          isDone : false,
        },
        {
          title : 'Kerja 2',
          description : 'Deskripsi Task 2',
          isDone : false,
        },
        {
          title : 'Tugas 3',
          description : 'Deskripsi Task 3',
          isDone : false,
        }
      ],
    }
  },
  computed : {
    resultQuery(){
      if(this.searchQuery){
        return this.tasks.filter((item) => {
          return this.searchQuery
          .toLowerCase()
          .split(" ")
          .every((v) => item.title.toLowerCase().includes(v));
        });
      } else{
        console.log(this.tasks);
        return this.tasks
      }
    }
  }
}
</script>
<style>
</style>

