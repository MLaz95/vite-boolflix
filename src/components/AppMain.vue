<script>
    import {store} from '../store.js';
    import MovieItem from './MovieItem.vue';
    import TvItem from './TvItem.vue';
    export default{
        name: 'AppMain',

        data(){
            return{
                store,
            }
        },

        components:{
            MovieItem,
            TvItem
        }
    }
</script>

<template>
    <div class="my_container">
        <h2 v-if="store.movieResults != '' && store.movieResults.results != ''" class="pt-5">Movies</h2>
        <div class="d-flex flex-wrap align-items-stretch">
            <MovieItem
                v-for="currentResult in store.movieResults.results"
                :movieObject="currentResult"
            ></MovieItem>
        </div>
        <h2 v-if="store.tvResults.results != '' && store.movieResults != ''" class="pt-5">TV</h2>
        <div class="d-flex flex-wrap align-items-stretch">
            <TvItem
            v-for="currentResult in store.tvResults.results"
                :tvObject="currentResult"
            ></TvItem>
        </div>
    </div>
</template>

<style lang="scss">

    .my_container{
        width: 80%;
        margin: 0 auto;
    }
</style>