<template>
    <div class="container">
    <section class="form">
        <form v-on:submit.prevent="handleSubmit">
        <div class="field">
            <label class="label">Nama Lengkap</label>
            <div class="control">
                <input v-model="form.name" class="input" type="text" placeholder="Nama lengkap beserta Gelar">
            </div>
            <label class="label">Message/Pesan</label>
            <div class="control">
                <textarea v-model="form.message" class="textarea" placeholder="Isi Pesan Anda Disini"></textarea>
            </div>
            <label class="label">Select Inquiry</label>
            <div class="control">
                <select v-model="form.inquiry_type">
                    <option disabled value="">Nothing Selected</option>
                    <option v-for="option in options.inquiry" :key="option.value">{{ option.text }}</option>
                </select>
            </div>
            <label class="label">Select Multiple</label>
            <div class="control">
                <select multiple v-model="form.usecases">
                    <option>Debugging</option>
                    <option>Fixing Errors</option>
                    <option>User Support</option>
                    <option>Human Error</option>
                    <option>Technology Error</option>
                </select>
            </div>
            <label class="checkbox">
                <input v-model="form.terms" type="checkbox">
                I agree to the <a href="#">Terms And conditions</a>
            </label>
            <div class="control">
                <label class="checkbox">
                    <input v-model="form.concepts" type="checkbox" value="promises">Promises
                </label>
                <label class="checkbox">
                    <input v-model="form.concepts" type="checkbox" value="testing"> Testing
                </label>
            </div>
            <label class="label">Radio</label>
            <div class="control">
                <label class="radio">
                    <input v-model="form.js_awesome" type="radio" value="Yes!"> Yes!
                </label>
                <label class="radio">
                    <input v-model="form.js_awesome" type="radio" value="No!"> No!
                </label>
            </div>
            <div class="control">
                <button class="button is-primary">Submit</button>
            </div>
        </div>
    </form>
    </section>

    <section class="content">
        <br>
        <ul>
            <li v-for="(item,k) in form" :key="k">
                <strong>{{ k }}</strong>: {{ item }}
            </li>
        </ul>
    </section>
    <div>
        <h3>Hasil Submit Form </h3>
        <ul>
            <li v-for="item in inputanForm" :key="item">{{ form }}</li>
        </ul>
    </div>
</div>
</template>
<script>
export default{
    layout(context){
        return 'custom'
    },
    data(){
        return {
            form:{
                name: '',
                message:'',
                inquiry_type:'',
                usecases: [],
                terms : false,
                concepts : [],
                js_awesome: '',
            },
        options:{
        inquiry:[
            {value:'feature', text:'Feature Request'},
            {value:'bug', text:'Bug Report'},
            {value:'support',text:'Support'}
        ]
    },
    inputanForm:[],
        }
    },
    methods:{
        handleSubmit(){
            // console.log(this.form)
            const item = {
                form: this.form
            }
            this.inputanForm.push(item)
        }
    }
    
}
</script>