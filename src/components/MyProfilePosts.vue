<template>
    <div class="posts-container">


        <span class="button-section">

            <span class="myposts">

                <i class="bi bi-table" @click="() => { isActiveMyPosts = true; isActivePinPosts = false}"></i>
                <span class="line"  :class="{ active: isActiveMyPosts }"></span>
            </span>
            <span class="pinposts" >

                <i class="bi bi-person-square" @click="() => { isActiveMyPosts = false; isActivePinPosts = true }"></i>
                <span class="line" :class="{ active: isActivePinPosts }"> </span>
            </span>

        </span>


        <div class="img-view">
        <my-posts v-if="isActiveMyPosts"></my-posts>
        <pin-posts v-if="isActivePinPosts"></pin-posts>

        </div>








    </div>



</template>


<script lang="ts">
import { defineComponent } from 'vue'
import MyPosts from './Elements/MyPosts.vue'
import PinPosts from './Elements/PinPosts.vue'

export default defineComponent({
  components: { MyPosts, PinPosts },
    data() {

        return {
            isActiveMyPosts: true,
            isActivePinPosts: false,
        }
    },

    methods: {

        
    }
})
</script>




<style scoped lang="scss">

    .posts-container {
        height: 100%;
        width: 100%;
        overflow: auto;
        overflow-x: hidden;
        flex-direction: column;
        display: flex;
        .button-section {
            display: flex;
            width: 100%;
            height: 6%;
            

            .myposts, .pinposts {
                height: 100%;
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                i {
                    font-size: 1.5rem
                }

                .line  {
                    
                    height: 2px;
                    background-color: black;
                }

                .active {
                    width: 100%;
                }


               
            }

        }

        .img-view{
            width: 100%;
            height: 100%;
        }
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


