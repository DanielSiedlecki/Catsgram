<template>
    <div class="containers">
    <top-nav-bar></top-nav-bar>
    <relation-bar></relation-bar>




    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RelationBar from './RelationBar.vue';
import TopNavBar from './TopNavBar.vue';

export default defineComponent({
    setup() {
        
    },

    components: {TopNavBar, RelationBar}
})
</script>


<style lang="scss" scoped>


.containers{
    
    width: 100%;
    height: 100%;
}

</style>