<template>
    
    <div class="upper_bar">
        <span class="profile-name"><a>Custom_Name</a></span>
        <span class="icons" >

            <i class="icon-plus-squared-alt" style="font-size: 2rem;"></i>
            <span class="lines">

                <span></span>
                <span></span>
                <span></span>

            </span>
        </span>



    </div>


</template>



<style lang="scss" scoped>

    .upper_bar {
        width: 100%;
        height: 8%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        

        .profile-name a {
            font-size: 1.5rem;
            color: black;
            font-weight: 600;
            margin-left: 1rem;

        }


        .icons {
            margin-right: 1rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;

            .lines {

                display: flex;
                flex-direction: column;
                gap: 5px;

                span {
                    width: 1.2rem;
                    height: 3px;
                    background-color: black;
                }
            }

        



        }
       


    }



</style>