<template>
      <div class="py-4">
    <div class="container">
    <div class="title border-bottom d-flex align-item-center justify-content-between py-2">
    <h5>Sistem Informasi Pembayaran SPP</h5>
    <div class="d-flex align-item-center ms-auto">
        <span class="me-2">Jenis Pembayaran</span>
      <select v-model="pembayaran" class="form-control w-75" >
      <option value="">All</option>
      <option value="cash">Cash</option>
      <option value="transfer">Transfer</option>
      <option value="kredit">Kredit</option>
      </select>
      <div class="d-flex align-items-center justify-content-end w-100">
      <span class="me-2">View As</span>
      <button class="btn btn-outline-secondary py-1 px-3" @click="isGrid=!isGrid">{{ isGrid?'Grid':'List' }}</button>
      </div>
    </div>
  </div>
    <div class="list-task row">
      <CardItem v-for="student in filteredStudents" :key="student.nis" :student="student" :isGrid="isGrid" />
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
      pembayaran : '',
      students : [
        {
          nis : '00832938',
          nama : 'Surya',
          kelas : 'X RPL 1',
          pembayaran : 'cash',
          isDone : false,
        },
        {
          nis : '00832977',
          nama : 'Ardi',
          kelas : 'XI RPL 1',
          pembayaran : 'transfer',
          isDone : false,
        },
        {
          nis : '00832967',
          nama : 'Kurniawan',
          kelas : 'XII RPL 2',
          pembayaran : 'cash',
          isDone : false,
        },
        {
          nis : '00832999',
          nama : 'Abdi',
          kelas : 'X AKT 1',
          pembayaran : 'transfer',
          isDone : false,
        },
        {
          nis : '00832955',
          nama : 'Manu',
          kelas : 'XI RPL 3',
          pembayaran : 'cash',
          isDone : false,
        },
        {
          nis : '00832911',
          nama : 'Jujun',
          kelas : 'XI RPL 4',
          pembayaran : 'cash',
          isDone : false,
        },
      ],
    }
  },
  computed : {
    resultQuery(){
      if(this.searchQuery){
        return this.students.filter((item) => {
          return this.searchQuery
          .toLowerCase()
          .split(" ")
          .every((v) => item.nama.toLowerCase().includes(v));
        });
      } else{
        console.log(this.students);
        return this.students
      }
    },
    filteredStudents(){
      if(!this.pembayaran){
        return this.students;
      }
      return this.students.filter(student => !student.pembayaran.indexOf(this.pembayaran));

    },

  },
}
</script>
<style>
</style>

