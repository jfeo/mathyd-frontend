<template>
    <section class="container">
        <h2>Assignments</h2>

        <ul v-if="assignments.length > 0">
           <li v-for="assignment in assignments" :key="assignment.id">
               <router-link :to="{ name: 'assignment', params: { assignmentId: assignment.id } }">{{ assignment.title }}</router-link>
            </li> 
        </ul>

        <div class="alert alert-info" v-if="loading" role="alert">
            <div class="h3">Loading assignments</div>
        </div>

        <div class="alert alert-info" v-if="!loading && !assignments.length">
            <div class="h3">No assignments</div>
        </div>
    </section>
</template>

<script>
import { assignmentServiceInstance as assignmentService } from './../services/AssignmentService';

export default {
    data() {
        return {
            loading: false,
            error: null,
            assignments: []
        }
    },
    async created() {
        this.loading = true;
        try {
            this.assignments = await assignmentService.get_assignments();   
        } catch (error) {
            this.error = error
        } finally {
            this.loading = false;
        }
    }
}
</script>

<style scoped>
</style>