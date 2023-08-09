<template>
    <div class="container-myprofile">
    <my-profile-upper-bar-vue></my-profile-upper-bar-vue>
    <my-profile-description></my-profile-description>
    <my-profile-stories-bar></my-profile-stories-bar>
    <MyProfilePosts></MyProfilePosts>


    </div>

</template>


<script lang="ts">
import { defineComponent } from 'vue'
import MyProfileUpperBarVue from './MyProfileUpperBar.vue';
import MyProfileDescription from './MyProfileDescription.vue';
import MyProfileStoriesBar from './MyProfileStoriesBar.vue';
import MyProfilePosts from './MyProfilePosts.vue';
export default defineComponent({
    components: {MyProfileUpperBarVue, MyProfileDescription, MyProfileStoriesBar, MyProfilePosts
        
    }
})
</script>


<style lang="scss" scoped>


    .container-myprofile {

        
        width: 100%;
        height: 100%;
    }



</style>