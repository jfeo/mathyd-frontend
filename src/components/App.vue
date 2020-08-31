<template>
    <body>
        <AppHeader></AppHeader>
        <section class="container">
            <router-view></router-view>
        </section>
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