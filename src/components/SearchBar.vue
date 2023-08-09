<template>
    
<div class="search-bar">

    <div class="search-area">

        <i class="bi bi-search"></i>
        <a class="text"> Search</a>
    </div>

    <div class="dots-icon">

        <span></span>
        <span></span>
        <span></span>

    </div>

    
</div>


</template>



<style lang="scss" scoped>


    .search-bar {
        width: 100%;
        height: 8%;
        background-color: white;
        display: flex;
        align-items: center;
        gap: 6px;
        

    }

    .search-area {
        height: 70%;
        width: 88%;
        background-color: rgba(0, 0, 0, 0.116);
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 5px;
        margin-left: 5px;

        i, .text {
            font-size: 1rem;
            margin-left: 0.5rem;
        }
    }

     .dots-icon  {
                
                flex-direction: row;
                gap: 3px;
                display: flex;
        }

        .dots-icon span {
            border-radius: 40px;
            width: 4px;
            height: 4px;
            background-color: rgba(0, 0, 0, 0.747);
            
        }

       






</style>