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
.my_card{
    width: calc(100% / 5 - 0.5rem * 4 / 5);
    min-height: 300px;
    transition: transform 0.3s;

    .card_back{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;      
        background-color: rgba($color: #000000, $alpha: 0.8);

        // properties that change on hover
        height: 0;
        opacity: 0;
        visibility: hidden;
    }

    .card_info{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        gap: 2px;

        padding: 1rem;
        text-align: center;
    }
    
    .my_flag{
        width: 20px;
        height: 20px;
        object-fit: contain;
    }

    .overview{
        text-align: start;
        font-size: 0.9rem;
        overflow-y: auto;
        
        /* width */
        &::-webkit-scrollbar {
        width: 5px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
        background-color: transparent;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
        background-color: #343a40;
        border-radius: 10px;
        }
    }

    &:hover{
        transform: scale(1.5);
        
        .card_back{
            animation: surface 1s ease forwards;
        }
    }

    @keyframes surface{
        to{
            height: 100%;
            opacity: 1;
            visibility: visible;
        }
    }

    
    
}

// media query
@media screen and (max-width: 1200px) {
    .my_card{
        width: calc(100% / 4 - 0.5rem * 3 / 4);
    }
}

@media screen and (max-width: 768px) {
    .my_card{
        width: calc(100% / 2 - 0.5rem * 1 / 2);
    }
}
</style>