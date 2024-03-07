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
            BOOLFLIX
        </h1>

        <div class="d-flex gap-3 flex-grow-1">
            <input type="search" v-model="store.search" class="search_bar flex-grow-1 bg-transparent border-0 fs-1 px-3" placeholder="Search for something to watch...">
            <button class="search_bar btn btn-lg rounded-0 fs-2" @click="$emit('search')">Search</button>
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