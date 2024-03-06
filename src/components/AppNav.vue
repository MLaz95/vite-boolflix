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
    <nav class="bg-danger-subtle p-3 d-flex justify-content-between align-items-center">
        <h1 class="text-danger">
            BOOLFLIX
        </h1>

        <div class="d-flex gap-3">
            <input type="search" v-model="store.search">
            <button class="btn btn-outline-light" @click="$emit('search')">Search</button>
        </div>
            
    </nav>
</template>

<style lang="scss">

</style>