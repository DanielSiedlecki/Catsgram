<template>
    <div class="containers" ref="scrollContainer" @scroll="handleScroll">
    <top-nav-bar></top-nav-bar>
    <relation-bar></relation-bar>
   <div ref="test" class="cats-avatar" v-for="cat in catsData" :key="cat.id">
    <cats-post :url="cat.url" ></cats-post>
   </div>

   <span style="width: 100%; display: flex; justify-content: center;">
   <loading-data-animation v-if="isLoading"></loading-data-animation>
   <br>
    </span>


    </div>
</template>

<script lang="ts">
import { fetchCats } from '@/services/http-common';
import { defineComponent } from 'vue'
import CatsData from '@/interface/Cats'
import CatsPost from './Elements/CatsPost.vue';
import RelationBar from './RelationBar.vue';
import TopNavBar from './TopNavBar.vue';
import { AxiosResponse } from 'axios';
import LoadingDataAnimation from './Elements/LoadingDataAnimation.vue';

export default defineComponent({
    mounted() {
        this.getCatImage()
       
        
    },

    components: { TopNavBar, RelationBar, CatsPost, LoadingDataAnimation },

    data() {
        return {

            catsData: [] as CatsData[],
            windowHeight: window.innerHeight,
            isLoading: false
        }
        
    },


    methods: {
       async getCatImage() {

            const data  = await fetchCats();
            if (data) {

                console.log(data)
                this.catsData = data
               

                }

        },

        async getMoreCatImages() {
            const newData  = await fetchCats();

            if (newData) {
                this.catsData = this.catsData.concat(newData)
            }
        },

        handleScroll() {
            if (typeof this.$refs.scrollContainer === 'object' && this.$refs.scrollContainer !== null) {
                const scrollContainer = this.$refs.scrollContainer as HTMLDivElement;
                const scrollPosition = scrollContainer.scrollTop;

                
                console.log('Scroll position:', scrollPosition);
                if (scrollPosition >= 5181) {
                    this.isLoading = true
                    this.getMoreCatImages()
                    

                }

            }
        }
    }
})




</script>




<style lang="scss" scoped>


.containers{
    
    width: 100%;
    height: 100%;
    overflow: auto;

}


::-webkit-scrollbar {
    width: 1px;
    }

    ::-webkit-scrollbar-thumb {
    background: transparent
        
    }

    ::-webkit-scrollbar-track {
    background: transparent;
    }
</style>