<template>
    <div :class="['item-task d-flex align-items-start border-bottom pt-3 pb-4', isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12']">
    <input id="task" v-model="localTask.isDone"  type="checkbox"  name="status"  class="me-2 mt-2" :checked="student.isDone" >
    <div :class="['d-flex flex-column', student.isDone ? 'text-decoration-line-through fst-italic' : '']">
        <div class="title-task mb-1">{{ student.nis }}</div>
        <div class="description-task small text-muted">{{ student.nama }}</div>
        <div class="description-task small text-muted">{{ student.pembayaran }}</div>
    </div>
        </div>
</template>
<script>
    export default{
        props : {
            student :{
                type: Object,
                default() {
                    return{}
                }
            },
            isGrid: {
                type : Boolean,
                required: true,
                default : false
            }
        },
        computed : {
            localTask:{
                get(){
                    return this.student
                },
                set(newValue){
                    this.$emit('update:student', newValue)
            },
        },
    }
}
</script>