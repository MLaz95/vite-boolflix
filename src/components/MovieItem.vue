<script>
    import {store} from '../store.js';
    export default{
        name: 'MovieItem',

        data(){
            return{
                store,
            }
        },

        props:{
            movieObject: Object,
        },
    }
</script>

<template>
    <div class="my_card">
        <img :src="`${store.posterBaseUrl}${movieObject.poster_path}`" v-if="movieObject.poster_path != null" alt="" class="img-fluid h-100 object-fit-cover my_poster">

        <div class="card_back">
            <div class="card_info">
                <h2>{{ movieObject.title }}</h2>
                <div>({{ movieObject.original_title }})</div>
                <!-- checks if language code matches country code -->
                <img v-if="store.flagIcons.hasOwnProperty(movieObject.original_language)" :src="`https://flagcdn.com/${movieObject.original_language}.svg`" class="my_flag">
                <!-- if not it checks if language code matches a list of common languages in movies -->
                <img v-else-if="store.commonLanguages.hasOwnProperty(movieObject.original_language)" :src="`https://flagcdn.com/${this.store.commonLanguages[movieObject.original_language]}.svg`" class="my_flag">
                <!-- if not it just prints the language tag -->
                <div v-else class="my_flag">{{ movieObject.original_language }}</div>
                <div>
                   <i class="fa-solid fa-star" v-for="star in Math.round(movieObject.vote_average / 2)"></i>
                </div>
                <p class="overview">{{ movieObject.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>