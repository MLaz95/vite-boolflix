<script>
    import {store} from '../store.js';
    export default{
        name: 'TvItem',

        data(){
            return{
                store,
            }
        },

        props:{
            tvObject: Object,
        },
    }
</script>

<template>
    <div class="my_card">
        <div class="card_back">
            <div class="card_info">
                <h2>{{ tvObject.name }}</h2>
                <h5>({{ tvObject.original_name }})</h5>
                <!-- tvObject in tmdb has a country of origin section!
                there is no need to compare the language code with the country ISO code like in the movie section -->
                <img :src="`https://flagcdn.com/${tvObject.origin_country[0].toLowerCase()}.svg`" :alt="tvObject.origin_country[0]" class="my_flag">
                <div>
                    <i class="fa-solid fa-star" v-for="star in Math.round(tvObject.vote_average / 2)"></i>
                </div>
                <p class="overview">{{ tvObject.overview }}</p>
            </div>
        </div>
        <img :src="`${store.posterBaseUrl}${tvObject.poster_path}`" v-if="tvObject.poster_path != null" alt="" class="img-fluid h-100 object-fit-cover">
        <h2 v-else class="text-center py-5 bg-black w-100 h-100">{{ tvObject.name }}</h2>
    </div>
</template>

<style lang="scss">

</style>