<template>
    
    <div class="description-bar">

        <span class="my-avatar">
            <img src="../assets/avatars/Avatar_cat.png" width="64px" height="64px" style="border-radius: 40px;">


        </span>


        <span class="counter-section">

        <span class="posts center"><h1>7</h1><a>Posts</a></span>

        <span class="followers center "><h1>4 999</h1><a>Followers</a></span>
        <span class="following center"><h1>394</h1><a>Following</a></span>
    </span>


    </div>

    <div class="description">
        <a>
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </a>    

        <span class="translation-button"> <a>See Translation</a></span>
    </div>


</template>



<style lang="scss" scoped>


    .description-bar {
        width: 100%;
        height: 15%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .my-avatar {
            margin-left: 1rem;
            
            img {
                border: black 3px solid;
            }

        }

        .counter-section {
            width: 70%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            .center {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            h1 {
                font-weight: 600;
                
            }


        }


    }


    .description {

        margin: 0.5rem ;
        display: flex;
        flex-direction: column;

         a{
            font-size: 0.8rem;
            font-weight: 500;
         }
         .translation-button a {
            font-weight: 600;
         }

    }






</style>