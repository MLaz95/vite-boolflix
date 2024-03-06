<script>
    import {store} from '../store.js';
    import CardItem from './CardItem.vue';
    export default{
        name: 'AppMain',

        data(){
            return{
                store,
            }
        },

        components:{
            CardItem,
        }
    }
</script>

<template>
    <div class="container">
        <div class="d-flex flex-wrap align-items-stretch">
            <CardItem
                v-for="currentResult in store.searchResults.results"
                :movieItem="currentResult"
            ></CardItem>
        </div>
    </div>
</template>

<style lang="scss">

    .my_card{
        // background-color: pink;
        border: 1px dashed red;
    }
</style>