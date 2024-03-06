<script>
  import axios from 'axios';
  import AppNav from './components/AppNav.vue';
  import {store} from './store.js';

  export default{
    data(){
      return{
        store,
      }
    },

    components:{
      AppNav,
    },

    methods:{
      findMovie(){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f5a4e0949a1a20f210ccb9ccfc9ae37a&query=${store.search}`).then(res => {
        this.store.searchResults = res.data
        console.log(this.store.searchResults)
      }).catch(err => {
        console.log(err)
      })
      }
    }
  }

</script>

<template>
  <AppNav @search="this.findMovie()"></AppNav>
  
</template>

<style lang="scss">
  @use './styles/general.scss' as *;

</style>
