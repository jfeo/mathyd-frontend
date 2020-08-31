<template>
    <form class="form" v-on:submit="submit">
        <div class="form-row mb-2">
            <div class="col">
                <label for="assignment-title">Assignment title</label>
                <input class="form-control" type="text" name="assignment-title" id="assignment-title" v-model="title">
            </div>
        </div>

        <div class="form-row">
            <div class="col">
                <button class="btn btn-primary" type="submit">Save assignment</button>
            </div>
        </div>
    </form>
</template>

<script>
import { assignmentServiceInstance as assignmentService } from './../services/AssignmentService';

export default {
    data() {
        return {
            title: null
        }
    },
    methods: {
        async submit(event) {
            event.preventDefault();
            await assignmentService.post_assignment({ title: this.title });
        }
    }
}
</script>

<style scoped>

</style>