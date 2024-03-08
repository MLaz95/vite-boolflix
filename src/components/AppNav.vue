<script>
    import {store} from '../store.js';
    export default{
        name: 'AppNav',

        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
    <nav class=" d-flex justify-content-between align-items-stretch mb-3">
        <h1 class="text-danger p-3 m-0">
            B<span class="d-none d-sm-inline">OOL</span>F<span class="d-none d-sm-inline">LIX</span>
        </h1>

        <div class="d-flex flex-grow-1">
            <input type="search" v-model="store.search" class="search_bar flex-grow-1 bg-transparent border-0 fs-1 ps-3 w-100" placeholder="Search for something to watch...">
            <button class="btn btn-lg rounded-0 fs-2" @click="$emit('search')">Search</button>
        </div>
            
    </nav>
</template>

<style lang="scss">

.search_bar:focus-visible{
    outline: none;
}

nav{
    background-image: linear-gradient(black, transparent);
}
</style>