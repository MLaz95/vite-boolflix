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
        this.store.searchResults = res.data
        console.log(this.store.searchResults)
      }).catch(err => {
        console.log(err)
      })
      }
    },

    created(){
      axios.get(`https://api.themoviedb.org/3/configuration?api_key=f5a4e0949a1a20f210ccb9ccfc9ae37a`).then(res => {
        this.store.config = res.data
        this.store.posterBaseUrl = `${this.store.config.images.base_url}${this.store.config.images.poster_sizes[3]}`
        console.log(this.store)
      }).catch(err => {
        console.log(err)
      }),

      axios.get(`https://flagcdn.com/en/codes.json`).then(res => {
        this.store.flagIcons = res.data
        console.log(this.store)
      }).catch(err => {
        console.log(err)
      })
    }
  }

</script>

<template>
  <AppNav @search="this.findMovie()"></AppNav>
  <AppMain></AppMain>
  
</template>

<style lang="scss">
  @use './styles/general.scss' as *;

</style>
