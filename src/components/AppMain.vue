<script>
    import {store} from '../store.js';
    import AppCard from './AppCard.vue';
    export default{
        name: 'AppMain',

        data(){
            return{
                store,
                currentFilter: '',
            }
        },

        components:{
            AppCard,
        },

        methods:{
            findGenre(genre_id, item){
                // uses the title property to check if the item is a movie or tv show
                // then compares the item genre ids with the appropriate array and returns the actual genre
                if(item.title){
                    return store.movieGenres.find(({id}) => id == genre_id).name
                } else {
                    return store.tvGenres.find(({id}) => id == genre_id).name
                }
            },

            // sets the current genre filter based on user input
            setFilter(genre_id){
                this.currentFilter = genre_id
            }
        }
    }
</script>

<template>
    <div class="my_container">
        <!-- only shows if user has made a search -->
        <div v-if="store.movieResults != '' && store.movieResults.results != ''" class="pt-5">
            <h2>Movies</h2>
            <!-- genre filters -->
            <ul>
                <li @click="setFilter('')" class="badge text-bg-secondary fs-4">All</li>
                <!-- it only shows genres that are present among the results -->
                <li 
                    v-for="genre_id in store.foundMovieGenres"
                    @click="setFilter(genre_id)"
                    class="badge text-bg-secondary fs-4"
                >{{ findGenre(genre_id, store.movieResults.results[0]) }}</li>
            </ul>
        </div>
        <div class="d-flex flex-wrap align-items-stretch gap-2 shadow">
            <!-- makes a card for each found movie -->
            <!-- v-show hides results depending on genre filter -->
            <AppCard
                v-for="currentResult in store.movieResults.results"
                v-show="currentFilter != '' ? currentResult.genre_ids.includes(currentFilter) : true"
                :item="currentResult"
            ></AppCard>
        </div>
        <h2 v-if="store.tvResults.results != '' && store.movieResults != ''" class="pt-5">TV</h2>
        <div class="d-flex flex-wrap align-items-stretch gap-2 shadow">
            <AppCard
            v-for="currentResult in store.tvResults.results"
                :item="currentResult"
            ></AppCard>
        </div>
    </div>
</template>

<style lang="scss">
    .my_container{
        width: 80%;
        margin: 0 auto;
    }


</style>