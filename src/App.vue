<template>

<div class="container">

  <div class="app">
  <home></home>


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


<style lang="scss" scoped>


.container {
  background-color: #E9ECEF;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.app {
  
  width: 375px;
  height: 667px;
  border: 3px solid black; 
  border-radius: 40px;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  position: relative;
}

.bottom-stick {
  position: absolute;
  width: 375px ;
  bottom: 0;

}





</style>




