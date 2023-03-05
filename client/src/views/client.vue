<template>
     
    <router-view/>
    <footers/>
</template>
<script>
import "../assets/client.css";
import footers from '../components/footer.vue';
export default{
    components:
{
    footers
}
}

</script>