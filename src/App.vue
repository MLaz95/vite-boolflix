<script>
  import axios from 'axios';
  import AppNav from './components/AppNav.vue';
  import AppMain from './components/AppMain.vue';
  import {store} from './store.js';

  export default{
    data(){
      return{
        store,
      }
    },

    components:{
      AppNav,
      AppMain,
    },

    methods:{
      findMovie(){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f5a4e0949a1a20f210ccb9ccfc9ae37a&query=${store.search}&language=it-IT`).then(res => {
        this.store.movieResults = res.data
        console.log('movies', this.store.movieResults)
      }).catch(err => {
        console.log(err)
      })
      },

      findTV(){
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=f5a4e0949a1a20f210ccb9ccfc9ae37a&query=${store.search}&language=it-IT`).then(res => {
        this.store.tvResults = res.data
        console.log('tv', this.store.tvResults)
      }).catch(err => {
        console.log(err)
      })
      }
    },

    created(){
      axios.get(`https://api.themoviedb.org/3/configuration?api_key=f5a4e0949a1a20f210ccb9ccfc9ae37a`).then(res => {
        this.store.config = res.data
        this.store.posterBaseUrl = `${this.store.config.images.base_url}${this.store.config.images.poster_sizes[3]}`
      }).catch(err => {
        console.log(err)
      }),

      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=e99307154c6dfb0b4750f6603256716d`).then(res => {
        this.store.movieGenres = res.data.genres
      }).catch(err => {
        console.log(err)
      }),

      axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=e99307154c6dfb0b4750f6603256716d`).then(res => {
        this.store.tvGenres = res.data.genres
      }).catch(err => {
        console.log(err)
      }),

      axios.get(`https://flagcdn.com/en/codes.json`).then(res => {
        this.store.flagIcons = res.data
      }).catch(err => {
        console.log(err)
      }),

      console.log('store', this.store)
    }
  }

</script>

<template>
  <AppNav @search="this.findMovie(), this.findTV()"></AppNav>
  <AppMain></AppMain>
  
</template>

<style lang="scss">
  @use './styles/general.scss' as *;

</style>
