<template>
    <div>
        <label v-bind:for="'exercise-title-' + this.uuid">Exercise title</label>
        <input type="text" v-bind:id="'exercise-title-' + uuid">
        <label v-bind:for="'exercise-text-' + uuid"></label>
        <textarea v-model="exercise.text" v-bind:id="'exercise-text-' + uuid"></textarea>
    </div>
</template>

<script>
let uuid = 0;

export default {
    props: ['exercise'],
    data() {
        return {
            uuid: null
        }
    },
    beforeMount() {
        this.uuid = uuid.toString();
        uuid += 1;
    }
}
</script>

<style scoped>

</style>