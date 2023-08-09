<template>
    <div class="myposts-container">

    <div class="myposts" v-for="cat, in catsImage" :key="cat.id">

        <img :src="cat.url" width="124" height="124" alt="">
             


    </div>
    </div>
</template>


<script lang="ts">
import CatsData from '@/interface/Cats'
import { fetchCats } from '@/services/http-common'
import { defineComponent } from 'vue'
export default defineComponent({
    mounted() {
        this.fetchCatsImage()


    
    },
    data() {
        return {
            catsImage: [] as CatsData[]

        }
    },


    methods: {

       async fetchCatsImage() {

            const data = await fetchCats() 
            if (data) {
                this.catsImage = data
            }
        }
        
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