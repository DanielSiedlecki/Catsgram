<template>
    


    <div class="relation-bar">
    

       <div class="my-avatar">
        
        <img src="../assets/avatars/Avatar_cat.png"   style="height: 64px; width: 64px; border-radius: 40px;  " > <i class="icon-plus"></i> 
        
       </div> 
        <div class="cats-avatar" v-for="cat in catsData" :key="cat.id">
           <span class="gradient-background"> 
            <img v-if="!isLoading" :src="cat.url" :width="cat.width" :height="cat.height" alt="Cat" style="height: 60px; width: 60px; border-radius: 40px; border: 2px white solid;" @click="isView()" >
            </span>
            <a class="name-profile" style="font-weight: 600; font-size: 0.6rem;">Name</a>
      
        
        
    
        
      </div>
      <teleport to="#modal">
      <stories-view v-if="RelationView" @closeWindow="closeWindow" ></stories-view>


      </teleport>


    </div>
    
   


</template>



<script lang="ts">
import { defineComponent } from 'vue'
import { fetchCats } from '../services/http-common'
import CatsData from '@/interface/Cats'
import LoadingDataAnimation from './Elements/LoadingDataAnimation.vue'
import StoriesView from './Elements/StoriesView.vue'
export default defineComponent({

    components:{ LoadingDataAnimation, StoriesView },
    mounted() {
        this.getCatsAvatar()
    },


    data() {

        return { 
            catsData: [] as CatsData[],
            isLoading: true,
            RelationView: false


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
        },

        isView() {
            this.RelationView = true
            console.log(this.RelationView)
        },

        closeWindow() {
            this.RelationView = false
        }
    }

})
</script>



<style lang="scss" scoped>
    .relation-bar {
        
        width: 100% -10px;
        height: 15%;
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
        justify-content: center;
        align-items: center;
        flex-direction: column;


        .gradient-background {  
            background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
            background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
            background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
            border-radius: 100%;
            position: relative;
            display: flex;
            padding: 1px;
        }
    }




    .name-profile {
        font-size: 0.5rem;
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
