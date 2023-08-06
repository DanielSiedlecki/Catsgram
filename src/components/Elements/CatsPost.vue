<template>
    
    <div class="catsPost" >
        <div class="profile-name-bar">
            <span style="display: flex; align-items: center;">
            
                <img src="../../assets/avatars/Avatar_cat.png" style="width: 32px; height: 32px; border-radius: 50px;"> <a class="profile-name" style="margin-left: 0.3rem; font-weight: 600; font-size: 0.8rem;">Custom_Name</a>
            
        
        </span>

            <span class="dots">
            <span></span>
            <span></span>
            <span></span>

            </span>
        </div>

        

        <img :src="url" alt="cats_foto" style="height: 400px; width: 100%;" >

        
        <div class="lower_bar">
        <span class="icons">

            <span style="gap: 1rem; display: flex; margin-left: 2px;">
            <i :style="{ color: isActive ? 'red' : 'black' }" :class="{ 'bi-heart-fill' : isActive, 'bi-heart': !isActive}" @click="() => {isActive = !isActive}"></i>
            <i class="bi bi-chat-right"></i>
            <i class="bi bi-send"></i>
            </span>
            <i class="bi bi-bookmark"></i>

        </span>
       
        

        <span class="likes-score"> <a>2 000 likes </a></span>
        <span class="profile-name"> 
            <a>Custom_Name <a style="font-weight: 400;">more...</a></a>
        </span>

        <span class="view-comments"><a style="font-weight: 400; font-size: 0.8rem;">View all 10 comments</a></span>

        <span class="add-comment">
            <img src="../../assets/avatars/Avatar_cat.png" alt="my-profile-avatar" width="24px" height="24px"  style="border-radius: 40px; margin-right: 2px;">
            <a style="font-weight: 300; font-size: 0.7rem;">Add a comment...</a>

        </span>

    </div>
    </div>


</template>



<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

    setup() {


    },
    data(){
        return {
            isActive: false
        }
    },
    
    props: {
        url: String,


    }
})
</script>


<style lang="scss">

.catsPost {
    width: 100%;
    margin-top: 1rem;
    


    .profile-name-bar {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2px;


        .dots  {
                
                flex-direction: row;
                gap: 2px;
                display: flex;
                margin-right: 5px;
        }

        .dots span {
            border-radius: 100%;
            width: 4px;
            height: 4px;
            background-color: black;
            
        }

        
    }
    .icons {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .icons i {
        font-size: 1.5rem ;
        color: black;
    }

    .lower_bar {
        display: flex;
        flex-direction: column;
        margin-left: 2px;
    }
    .lower_bar a{
        font-size: 1rem;
        font-weight: 600;
    }

    .add-comment {
        width: 100%;
        display: flex;
        align-items: center;
    }



}




</style>