<template> 
  
 <router-view name="navbar"/>
 <router-view name="banner"/>
 <router-view name="product"/>
 <router-view name="about"/>
 <router-view name="blog"/>
 <router-view></router-view>
 <footers/>
</template>

<script>
import footers from './components/footer.vue';
export default{
    components:
{
    footers
}
}

</script>
