<template>
    
<div class="lower_navbar">


<div class="home">
    <span><i class="icon-home"></i></span>
</div>
<div class="search">
    <span><i class="icon-search"></i></span>
</div>
<div class="new-post">
    <span><i class="icon-plus"></i></span>
</div>
<div class="reels">
    <span><i class="icon-video"></i></span>
</div>
<div class="myprofile">
    <span><img src="../assets/avatars/Avatar_cat.png" alt="my_avatar"></span>
</div>


</div>
</template>
<style lang="scss" scoped>

    .lower_navbar {
        border-top: 1px solid #CED4DA;
        height: 10%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        
        


    }

    .home i, .search i, .reels i , .new-post i, .myprofile i{
        font-size: 32px;
    }

    .myprofile img {
        height: 36px;
        width: 36px;
        border-radius: 50px;
        
    }




</style>