import { BaseAPIService } from "./BaseAPIService";

export class AssignmentService extends BaseAPIService {

    async get_assignments() {
        const result = await this.get('/assignments');
        return result.data.assignments;
    }

    async get_assignment(assignment_id) {
        const result = await this.get(`/assignment/${assignment_id}`);
        return result.data.assignment
    }

    async post_assignment(assignment) {
        const result = await this.post(`/assignment`, assignment);
        return result.data.assignment_id;
    }

    async patch_assignment(assignment_id, assignment) {
        const result = await this.patch(`/assignment/${assignment_id}`, assignment);
        return result;
    }

}

export const assignmentServiceInstance = new AssignmentService();