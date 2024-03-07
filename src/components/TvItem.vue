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
        <div class="text-center py-3">
            <h2>{{ tvObject.name }}</h2>
            <h5>({{ tvObject.original_name }})</h5>
            <!-- tvObject in tmdb has a country of origin section!
            there is no need to compare the language code with the country ISO code like in the movie section -->
            <img :src="`https://flagcdn.com/${tvObject.origin_country[0].toLowerCase()}.svg`" :alt="tvObject.origin_country[0]" class="my_flag">
            <div>{{ tvObject.vote_average }}</div>
        </div>
        <!-- <img :src="`${store.posterBaseUrl}${tvObject.poster_path}`" v-if="tvObject.poster_path != null" alt="" class="img-fluid h-100 object-fit-cover">
        <h2 v-else class="text-center py-5">{{ tvObject.title }}</h2> -->
    </div>
</template>

<style lang="scss">
    .my_card{
        width: calc(100% / 5);

        .my_flag{
            width: 25px;
            height: 25px;
            object-fit: contain;
        }
    }
</style>