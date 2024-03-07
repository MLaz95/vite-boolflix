<script>
    import {store} from '../store.js';
    export default{
        name: 'AppCard',

        data(){
            return{
                store,
            }
        },

        props:{
            item: Object,
        },
    }
</script>

<template>
    <div class="my_card">
        <img :src="`${store.posterBaseUrl}${item.poster_path}`" v-if="item.poster_path != null" alt="" class="img-fluid h-100 object-fit-cover my_poster">
        <h2 v-else class="text-center py-5 bg-black w-100 h-100 p-3">{{ item.title ? item.title : item.name }}</h2>
        <div class="card_back">
            <div class="card_info">
                <h2>{{ item.title ? item.title : item.name }}</h2>
                <div>({{ item.original_title ? item.original_title : item.original_name }})</div>
                <!-- checks if language code matches country code -->
                <img v-if="store.flagIcons.hasOwnProperty(item.original_language)" :src="`https://flagcdn.com/${item.original_language}.svg`" class="my_flag">
                <!-- if not it checks if language code matches a list of common languages in movies -->
                <img v-else-if="store.commonLanguages.hasOwnProperty(item.original_language)" :src="`https://flagcdn.com/${this.store.commonLanguages[item.original_language]}.svg`" class="my_flag">
                <!-- if not it just prints the language tag -->
                <div v-else class="my_flag">{{ item.original_language }}</div>
                <div>
                   <i class="fa-solid fa-star" v-for="star in Math.round(item.vote_average / 2)"></i>
                </div>
                <p class="overview">{{ item.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>