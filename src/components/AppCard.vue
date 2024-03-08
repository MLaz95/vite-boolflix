<script>
    import axios from 'axios';
    import {store} from '../store.js';
    export default{
        name: 'AppCard',

        data(){
            return{
                store,
                castInfo: '',
                isCastWindowActive: false,
            }
        },

        props:{
            item: Object,
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

            showCast(item){
                if(this.isCastWindowActive == false){
                   if(item.title){
                        axios.get(`https://api.themoviedb.org/3/movie/${item.id}/credits?api_key=e99307154c6dfb0b4750f6603256716d`).then(res => {
                        
                            this.castInfo = res.data.cast.slice(0, 5);
                            console.log(this.castInfo)
                        }).catch(err => {
                            console.log(err)
                        })
                    }else{
                        axios.get(`https://api.themoviedb.org/3/tv/${item.id}/credits?api_key=e99307154c6dfb0b4750f6603256716d`).then(res => {
                        
                        this.castInfo = res.data.cast.slice(0, 5);
                        console.log(this.castInfo)
                    }).catch(err => {
                        console.log(err)
                    })
                    }
                }

                this.isCastWindowActive = !this.isCastWindowActive
            },
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
                <div class="row align-items-center w-100 m-3">
                    <ul class="col-10 p-0 m-0 text-start d-flex flex-wrap gap-1">
                        <!-- creates a tag for each genre associated with the movie||tv item -->
                        <li v-for="genre_id in item.genre_ids" class="badge text-bg-secondary"><small>{{ findGenre(genre_id, item) }}</small></li>
                    </ul>
                    <button @click="showCast(item)" class="btn btn-sm btn-outline-light col-2" data-bs-toggle="collapse" data-bs-target="#cast-info">Cast</button>

                </div>
                <div id="cast-info" class="collapse collapse-horizontal">
                    <ul class="list-group list-group-flush text-start">
                        <li class="list-group-item list-group-item-secondary" v-for="actor in castInfo">
                            <div class="test">{{actor.name}}</div>
                            <small class="ps-2 text-nowrap test">as {{ actor.character }}</small>
                        </li>
                    </ul>
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
    
    &:hover{
        transform: scale(1.5);
        
        .card_back{
            animation: surface 1s ease forwards;
        }
    }
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

            #cast-info{
                position: absolute;
                top: 0;
                left: calc(100% - 1px);
    
                ul{
                    min-width: 150px;
                }
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