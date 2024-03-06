<script>
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
    }
  }

</script>

<template>
  <AppNav></AppNav>
  
</template>

<style lang="scss">
  @use './styles/general.scss' as *;

</style>
