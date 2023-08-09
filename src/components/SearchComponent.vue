<template>
    <search-bar></search-bar>
    
    <div class="containers">
        <loading-data-animation v-if="isLoading" class="centered-loading" ></loading-data-animation>
        <div class="img-container" v-for="(cat, index) in catsData" :key="cat.id">
            <loading-data-animation v-if="isLoading"></loading-data-animation>
            <img :src="cat.url" alt="random-cat-photo"  style=" width: 100%; height: 100%; " :class="{ 'large-image': index == 0  }" @load="() => {
                isLoading = false
            }">

            



        </div>



    </div>


</template>


<script lang="ts">
import { defineComponent } from 'vue'
import CatsData from '@/interface/Cats'
import { fetchCats } from '@/services/http-common';
import searchBar from './SearchBar.vue';
import LoadingDataAnimation from './Elements/LoadingDataAnimation.vue';

export default defineComponent({
     components: { searchBar, LoadingDataAnimation },
    mounted() {

        this.fetchCatsImage()
    },

    data() {
        return {
            catsData: [] as CatsData[],
            isLoading: true,
        }
    },

    methods: {
        async fetchCatsImage(){
            try {


                const fetchPromises = [];
                const numberOfRequests = 10;

                for (let i = 0; i < numberOfRequests; i++) {
                    fetchPromises.push(fetchCats());
                }

                const responses = await Promise.all(fetchPromises);

                if (responses) {
                    
                    this.catsData = responses.flat();
                }

              
                console.log(this.catsData.length);
            } catch (error) {
                console.log("Wystąpił błąd ", error);
            }
        },

        handleIsLoading() {
            this.isLoading = false
        }
    }

   
})
</script>



<style lang="scss" scoped>


   .containers{
    width: 100%;
    height: 82%;
    overflow: scroll;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;

    
}   

.img-container  {
       display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1px
        
    }

.large-image {
  grid-row-end: span 2;
}
    

.centered-loading {
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-40%, -40%);
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
