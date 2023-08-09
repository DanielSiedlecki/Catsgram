<template>

    <div class="stories-bar">


        <span class="my-stories">
            <img :src="catImage.url" alt="random-cat-image" style="border-radius: 40px; width: 64px; height: 64px;">


        </span>


        <span class="stories-add-buttom">

            <i class="icon-plus"></i>


        </span>


    </div>


</template>


<script lang="ts">
import { fetchOneCat } from '@/services/http-common';
import { defineComponent } from 'vue'

export default defineComponent({
    mounted() {this.fetchCatImage() },
    data() {
        return {
            catImage: {} as any
        }
    },
    methods: {  

        async fetchCatImage() {
            console.log("work")

            const data = await fetchOneCat()
            if (data) {

                this.catImage = data[0]
                console.log(this.catImage)
                
            }


        }
        
     }
})
</script>



<style lang="scss" scoped>

    .stories-bar {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        width: 100%;
        height: 10%;
        
        margin: 1rem;

        .stories-add-buttom {

                height: 64px ;
                width: 64px;
                border-radius: 40px;
                border: solid 2px black;
                display: flex;
                justify-content: center;
                align-items: center;


            i {
                font-size: 2.5rem;
            }
        }
    }

    


</style>