<template>
    <div class="container">
        <header class="blog-header py-3">
            <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-4 pt-1">
                    <a class="link-secondary" href="#">Subscribe</a>
                </div>
                <div class="col-4 text-center">
                    <a class="text-dark fs-4" href="#">Articles</a>
                </div>
                <div class="col-4 d-flex justify-content-end align-items-center">
                    <a class="btn btn-sm btn-outline-secondary" href="#">Sign Up
                    </a>
                </div>
            </div>
        </header>
        <div class="p-4 p-md-5 text-white rounded bg-dark">
            <div class="col-md-6 px-0">
                <h1 class="display-5 fsc-italic">SMA Negeri 6 Cimahi</h1>
                <p class="lead my-3">Artikel Untuk pembelajaran</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-smh-md-250 position-relative">
                <div class="col-12 d-none d-lg-block">
                    <img src="#" alt="#">
                </div>
                <div class="col-12 p-4 d-flex flex-column position-static">
                    <h4 class="mb-2">Judul Artikel</h4>
                    <p class="card-text mb-auto">disini content artikel</p>
                    <a class="stretched-link" href="#">Continue Reading</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    layout (context){
        return 'custom'
    }
}
</script>