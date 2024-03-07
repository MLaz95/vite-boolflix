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
        <div class="text-center py-3">
            <h2>{{ movieObject.title }}</h2>
            <h5>({{ movieObject.original_title }})</h5>
            <!-- checks if language code matches country code -->
            <img v-if="store.flagIcons.hasOwnProperty(movieObject.original_language)" :src="`https://flagcdn.com/${movieObject.original_language}.svg`" class="my_flag">
            <!-- if not it checks if language code matches a list of common languages in movies -->
            <img v-else-if="store.commonLanguages.hasOwnProperty(movieObject.original_language)" :src="`https://flagcdn.com/${this.store.commonLanguages[movieObject.original_language]}.svg`" class="my_flag">
            <!-- if not it just prints the language tag -->
            <div v-else class="my_flag">{{ movieObject.original_language }}</div>
            <div>
               <i class="fa-solid fa-star" v-for="star in Math.round(movieObject.vote_average / 2)"></i>
            </div>
        </div>
        <!-- <img :src="`${store.posterBaseUrl}${movieObject.poster_path}`" v-if="movieObject.poster_path != null" alt="" class="img-fluid h-100 object-fit-cover">
        <h2 v-else class="text-center py-5">{{ movieObject.title }}</h2> -->
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