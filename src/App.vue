<template>

<div class="container">

  <div class="app">


  <router-view style="height: calc(100% - 80px);"></router-view>


  <nav-bar class="bottom-stick"></nav-bar>
</div>

</div>
</template>




<script lang="ts">
import { defineComponent } from 'vue'
import Home from './components/Home.vue';
import NavBar from './components/NavBar.vue';
export default defineComponent({
  setup() {
  
  },



  components:{
    Home,
    NavBar
  }
})
</script>


<style scoped lang="scss" >


.container {
  background-color: #E9ECEF;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
 
  
}

.app {
  
  width: 375px;
  height: 667px;
  border: 3px solid black; 
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  background-color: white;
  position: relative;
  
  
}

.bottom-stick {
  width: 375px ;
  position: absolute;
  bottom: 0;
  
  
  
  
  

}





</style>




