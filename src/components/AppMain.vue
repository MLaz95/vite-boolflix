<script>
    import {store} from '../store.js';
    import AppCard from './AppCard.vue';
    export default{
        name: 'AppMain',

        data(){
            return{
                store,
                currentMovieFilter: '',
                currentTvFilter: '',
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
            setFilter(genre_id, tag){
                if(tag == 'movie'){
                    this.currentMovieFilter = genre_id
                }else if(tag == 'tv'){
                    this.currentTvFilter = genre_id
                }
                
            }
        }
    }
</script>

<template>
    <div class="my_container pb-5">
        <!-- MOVIES -->
        <!-- only shows if user has made a search -->
        <div v-if="store.movieResults != '' && store.movieResults.results != ''" class="pt-5">
            <h2>Movies</h2>
            <!-- genre filters -->
            <ul class="d-flex gap-1 p-0 flex-wrap">
                <li @click="setFilter('', 'movie')" class="genre_btn badge text-bg-secondary fs-6">All</li>
                <!-- it only shows genres that are present among the results -->
                <li 
                    v-for="genre_id in store.foundMovieGenres"
                    @click="setFilter(genre_id, 'movie')"
                    class="genre_btn badge text-bg-secondary fs-6"
                >{{ findGenre(genre_id, store.movieResults.results[0]) }}</li>
            </ul>
        </div>
        <div class="d-flex flex-wrap align-items-stretch gap-2">
            <!-- makes a card for each found movie -->
            <!-- v-show hides results depending on genre filter -->
            <AppCard
                v-for="currentResult in store.movieResults.results"
                v-show="currentMovieFilter != '' ? currentResult.genre_ids.includes(currentMovieFilter) : true"
                :item="currentResult"
            ></AppCard>
        </div>
        <!-- END OF MOVIES -->

        <!-- TV -->
        <div v-if="store.tvResults != '' && store.tvResults.results != ''" class="pt-5">
            <h2>TV</h2>
            <!-- genre filters -->
            <ul class="d-flex gap-2 p-0 flex-wrap">
                <li @click="setFilter('', 'tv')" class="genre_btn badge text-bg-secondary fs-6">All</li>
                <!-- it only shows genres that are present among the results -->
                <li 
                    v-for="genre_id in store.foundTvGenres"
                    @click="setFilter(genre_id, 'tv')"
                    class="genre_btn badge text-bg-secondary fs-6"
                >{{ findGenre(genre_id, store.tvResults.results[0]) }}</li>
            </ul>
        </div>
        <div class="d-flex flex-wrap align-items-stretch gap-2">
            <AppCard
            v-for="currentResult in store.tvResults.results"
                :item="currentResult"
                v-show="currentTvFilter != '' ? currentResult.genre_ids.includes(currentTvFilter) : true"
            ></AppCard>
        </div>
    </div>
</template>

<style lang="scss">
    .my_container{
        width: 80%;
        margin: 0 auto;
    }

    .genre_btn{
        cursor: pointer;

        &:hover{
            box-shadow: 0 0 10px white;
        }
    }
</style>