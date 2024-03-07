<script>
    import {store} from '../store.js';
    export default{
        name: 'CardItem',

        data(){
            return{
                store,
                commonLanguages: {
                    'en': 'us',
                    'ja': 'jp',
                    'hi': 'in',
                    'zh': 'cn',
                    'ko': 'kr',
                },
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
            <!-- checks if language code matches country code -->
            <img v-if="store.flagIcons.hasOwnProperty(movieItem.original_language)" :src="`https://flagcdn.com/${movieItem.original_language}.svg`" class="my_flag">
            <!-- if not it checks if language code matches a list of common languages in movies -->
            <img v-else-if="commonLanguages.hasOwnProperty(movieItem.original_language)" :src="`https://flagcdn.com/${this.commonLanguages[movieItem.original_language]}.svg`" class="my_flag">
            <!-- if not it just prints the language tag -->
            <div v-else class="my_flag">{{ movieItem.original_language }}</div>

            <div>{{ movieItem.vote_average }}</div>
        </div>
        <!-- <img :src="`${store.posterBaseUrl}${movieItem.poster_path}`" v-if="movieItem.poster_path != null" alt="" class="img-fluid h-100 object-fit-cover">
        <h2 v-else class="text-center py-5">{{ movieItem.title }}</h2> -->
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