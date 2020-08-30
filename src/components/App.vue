<template>
    <body>
        <AppHeader></AppHeader>
        <router-view></router-view>
        <AppFooter></AppFooter>
    </body>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<style scoped>
</style>