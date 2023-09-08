<template>
    <div>
        <select @change="updateSelectedCategory($event.target.value)">
        <option value="">All</option>
        <option value="Lunas">Lunas</option>
        <option value="Kredit">Kredit</option>
        </select>
        <ul>
            <li v-for="student in filteredStudents" :key="student.id">{{ student.name }}</li>
        </ul>
    </div>
</template>
<script>
export default{
    layout(context){
        return 'custom'
    },
    data(){
        return{
            selectedCategory: null,
            students : [
                {id : 1, name: 'Surya', category : 'Lunas'},
                {id : 2, name: 'Ardi', category : 'Kredit'},
                {id : 3, name: 'Kurniawan', category : 'Lunas'},
            ],
        };
    },
    computed : {
        filteredStudents(){
            if(!this.selectedCategory){
                return this.students;
            }
            return this.students.filter((student) => student.category === this.selectedCategory);
        },
    },
    
    watch : {
        filteredStudents(value){
            this.students = value;
        },
    },
    methods : {
        updateSelectedCategory(category){
            this.selectedCategory = category;
        },
        clearSelectedCategory(){
            this.selectedCategory = null;
        },
    },
}
</script>
