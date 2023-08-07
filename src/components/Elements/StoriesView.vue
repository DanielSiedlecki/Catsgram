<template>
    
<div class="stories-view">

    <div class="header" style="position: absolute;">
 <div class="progress-bar ">

    <div class="progress " :style="{ width: progressWidth }" ></div>

 </div>
<div class="name-information">

    <span class="profile-data">
       <span class="avatar"> <img src="../../assets/avatars/Avatar_cat.png" alt="my-profile-avatar" width="32px" height="32px" style="border-radius:50px ;"></span>
       <span class="profile-name"><a> custom_name</a> <span class="time-ago"> <a>48m </a> </span></span>


    </span>

    <span class="icons">

            <i class="bi bi-x-lg" @click="emitCloseView"></i>


    </span>


</div>
    </div>

    <img  :src="require(`../../assets/local_cats/${randomSrc}`)" style="height: 100%; width: 100%;">




    <div class="lower_bar" style="position: absolute;">

        <span class="message-empty">

            <a> Send message</a>
        </span>

        <div class="lower_bar-icons">
            <i class="bi bi-heart"></i>
            <i class="bi bi-cursor"></i>

        </div>

    </div>
</div>


</template>


<script lang="ts">
import { computed, defineComponent } from 'vue'
import localCats from '../../assets/localCats.json'

export default defineComponent({
    mounted() {
        this.startProgressBar()
        
       
      
   
    },

    data(){
        return {
            progressWidth: '0%',
        }
    },



    methods: {
        emitCloseView() {
           this.$emit('closeWindow')
        },


        startProgressBar() {
            
            setTimeout(() => {
                this.progressWidth = '100%';
            }, 0);


            setTimeout(() => {

                this.emitCloseView()
            }, 5000)
        },


        
    
    },


    computed: {
        randomSrc() {
            const randomNum = Math.floor(Math.random() * 9) + 1
            const randomCatImage = localCats[randomNum].src
            return randomCatImage


        }
    }
})
</script>


<style lang="scss" scoped>

    .stories-view {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 375px;
        height: 667px;
        z-index: 1000;
        



        .header {
            width: 100%;
            display: flex;
            flex-direction: column;

            .progress-bar {
                margin-top: 1px;
                height: 2px;
                width: 100%;
                background-color: rgba(255, 255, 255, 0.308);
                border-radius: 40px;

                .progress {
                    height: 2px;
                    background-color: white;
                    width: 0%;
                    transition: width 5s linear;
                }
            }
            
            
            .name-information {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }

            .profile-data {
                margin: 0.5rem;
                gap: 0.4rem;
                display: flex;
                align-items: center;
                
                
                
            }

            .profile-data .profile-name a {
                font-size: 0.8rem;
                color: white;
                font-weight: 600;
                
            }
            .profile-data .profile-name .time-ago a {
                font-size: 0.6rem;
                color: white;
                font-weight: 400;
                
            }

            .icons {
                padding: 0.5rem;



                
            }

            
            .icons i  {
                font-size: 1.5rem;
                color: white;

                
            }

          

                
        }


        .lower_bar {
            display: flex;
            bottom: 0;
            width: 100%;
            height: 6%;
            margin: 5px;
            .message-empty {

                width: 80%;
                border-radius: 60px;
                border: rgba(255, 255, 255, 0.5) 1px solid;
                display: flex;
                align-items: center;
            }

            .message-empty a {
                padding: 1rem;
                color: white;
                font-weight: 400;
            }

            .lower_bar-icons {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                width: 20%;
                gap: 1rem;
               
                
                i {
                    font-size: 1.2rem;
                    color: white;
                   
                }
            }

            


            
            
           
        }


}








</style>