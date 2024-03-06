<script>
    import {store} from '../store.js';
    export default{
        name: 'CardItem',

        data(){
            return{
                store,
            }
        },

        props:{
            movieItem: Object,
        },
    }
</script>

<template>
    <div class="my_card">
        <div class="text-center py-3">
            <h2>{{ movieItem.title }}</h2>
            <h5>({{ movieItem.original_title }})</h5>
            <div>{{ movieItem.original_language }}</div>
            <div>{{ movieItem.vote_average }}</div>
        </div>
        <!-- <img :src="`${store.posterBaseUrl}${movieItem.poster_path}`" v-if="movieItem.poster_path != null" alt="" class="img-fluid h-100 object-fit-cover">
        <h2 v-else class="text-center py-5">{{ movieItem.title }}</h2> -->
    </div>
</template>

<style lang="scss">
    .my_card{
        width: calc(100% / 5);
    }
</style>