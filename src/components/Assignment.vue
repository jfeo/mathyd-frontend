<template>
    <h2>{{ title }}</h2>
</template>

<script>
import { assignmentServiceInstance as assignmentService } from './../services/AssignmentService';

export default {
    props: ['assignmentId'],
    data() {
        return {
            title: null
        }
    },
    async created() {
        const assignment = await assignmentService.get_assignment(this.assignmentId);
        this.title = assignment.title;
    }
}
</script>

<style scoped>

</style>