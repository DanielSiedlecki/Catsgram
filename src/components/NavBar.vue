<template>
    
<div class="lower_navbar">

<router-link to="/">
<div class="home  " >
    <span><i class="icon-home"></i></span>
</div>

</router-link>

<router-link to="/search">
<div class="search">
    <span><i class="icon-search"></i></span>
</div>
    </router-link>

<router-link to="/newpost">    
<div class="new-post">
    <span><i class="icon-plus-squared-alt"></i></span>
</div>
    </router-link>


    <router-link to="/reels">    
<div class="reels">
    <span><i class="icon-video"></i></span>
</div>
    </router-link>

    <router-link to="/myprofile">
<div class="myprofile">
    <span><img src="../assets/avatars/Avatar_cat.png" alt="my_avatar"></span>
</div>
    </router-link>

</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    setup() {
        
    },

    components: {
        
    },
    methods: {
        
    }
})
</script>


<style lang="scss" scoped>

    .lower_navbar {
        border-top: 1px solid #CED4DA;
        height: 10%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: white;
        
        
        


    }

    .home i, .search i, .reels i , .new-post i, .myprofile i{
        font-size: 32px;
        color: black;
    }

    

    .myprofile img {
        height: 36px;
        width: 36px;
        border-radius: 50px;
        
    }




</style>