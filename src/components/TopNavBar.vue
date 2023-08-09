<template>
    
    <div class="nav-bar">

       <span class="text"><a>For you</a>  </span>



       <span class="icons">
       <span class="icon-hear">
        <i class="icon-heart-empty"></i>

       </span>
       <span class="icon-dm">
        <i class="icon-direction"> </i>
       </span>
       </span>



    </div>



</template>






<style lang="scss" scoped>
    .nav-bar {
        display: flex;
        align-items: center;
        
        width: 100%;
        height: 8%;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        justify-content: space-between;
        
        

    }

    .text a {
        margin-left: 1rem;
        font-size: 1.5rem;
        font-weight: 800;
    
    }

    .icons {
        display: flex;
        margin-right: 0.6rem;
        flex-direction: row;
        gap: 0.5rem;
        
        
      
        
    }


    .icons i {
        font-size: 1.5rem;
    }



</style>