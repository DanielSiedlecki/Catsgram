<template>
    


    <div class="relation-bar">
    

       <div class="my-avatar">
        
        <img src="../assets/avatars/Avatar_cat.png"   style="height: 64px; width: 64px; border-radius: 40px;  " > <i class="icon-plus"></i> 
       </div> 
        <div class="cats-avatar" v-for="cat in catsData" :key="cat.id">
          <img v-if="!isLoading" :src="cat.url" :width="cat.width" :height="cat.height" alt="Cat" style="height: 62px; width: 62px; border-radius: 40px;" >
          <loading-data-animation v-if="isLoading"/>
      
      </div>


    </div>

</template>



<script lang="ts">
import { defineComponent } from 'vue'
import { fetchCats } from '../services/http-common'
import CatsData from '@/interface/Cats'
import LoadingDataAnimation from './Elements/LoadingDataAnimation.vue'
export default defineComponent({

    components:{LoadingDataAnimation},
    mounted() {
        this.getCatsAvatar()
    },


    data() {

        return { 
            catsData: [] as CatsData[],
            isLoading: true


        }
    },

    methods: {

        async getCatsAvatar() {
            try {
                const data = await fetchCats();
                if (data) { 
                    this.isLoading = false; 
                    this.catsData = data
}

            }


            catch (error) {
                console.log(error)
            }
        }
    }

})
</script>



<style lang="scss" scoped>
    .relation-bar {

        width: 100% -10px;
        height: 10%;
        display: flex;
        overflow: auto;
        overflow-y: hidden;
        gap: 0.5rem;
        margin-left: 10px;
        margin-top: 0.2rem;
    }

    .cats-avatar {
        display: flex;
        margin-top: 1px;
         border-radius: 100%;
        background: linear-gradient(to right, red, purple);
        padding:2px ;
        justify-content: center;
        align-items: center;
        
    }
    .my-avatar {
         position: relative;
        display: inline-block;
    }


    .my-avatar i {
        display: flex;
        align-items: center;
        justify-content: center;
       z-index: 20;
       font-size: 1rem;
       position: absolute; top: 3rem; 
       right: 0.5rem; 
       transform: translate(50%, -50%);
       color: white;
       background-color: black;
       height: 1.5rem;
       border-radius: 100%;
       width: 1.5rem;
       
        
    }

    ::-webkit-scrollbar {
    height: 1px;
    }

    ::-webkit-scrollbar-thumb {
    background: transparent
        
    }

    ::-webkit-scrollbar-track {
    background: transparent;
    }


    
</style>
