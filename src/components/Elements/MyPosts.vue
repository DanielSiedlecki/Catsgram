<template>
    <div class="myposts-container">

    <div class="myposts" v-for="(cat, index) in catsImage" :key="index">

        <img :src="require(`../../assets/local_cats/${cat.src}`)" width="124" height="124" alt="">
             


    </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import localCats from '../../assets/localCats.json'
export default defineComponent({
    mounted() {
    
    },
    data() {
        return {
            catsImage: localCats

        }
    },


    methods: {
        
    }
})
</script>

<style lang="scss" scoped>

    .myposts-container {
    height: 50%;
    width: 100%;
    overflow: auto;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;


    }
    .myposts {
       display: flex;
        justify-content: center;
        align-items: center;
        

        img {
            margin-top: 1px;
        }

       
    }
</style>