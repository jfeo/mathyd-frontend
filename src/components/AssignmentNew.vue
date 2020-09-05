<template>
    <form class="form" v-on:submit="submit">
        <div class="form-row mb-2">
            <div class="col">
                <label for="assignment-title">Assignment title</label>
                <input class="form-control" type="text" name="assignment-title" id="assignment-title" v-model="title">
            </div>
        </div>

        <div class="form-row mb-2">
            <div class="col">
                <button type="button" v-on:click="exercises.push({})" class="btn btn-primary">Add Exercise</button>
            </div>
        </div>

        <div class="form-row mb-2" v-for="(exercise, index) in exercises" :key="index">
            <div class="col">
                <ExerciseNew exercise="exercise"></ExerciseNew>
            </div>
            <div class="col">
                <button type="button" v-on:click="exercises.splice(index, 1)" class="btn btn-danger">Remove</button>
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
import ExerciseNew from './ExerciseNew.vue';

export default {
    components: {
        ExerciseNew: ExerciseNew
    },
    data() {
        return {
            title: null,
            exercises: []
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