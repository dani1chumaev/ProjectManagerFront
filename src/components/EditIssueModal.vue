<template>
  <div ref="editIssueModal" class="modal fade" id="editIssueModal" tabindex="-1" aria-labelledby="addProjectModal"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Issue</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit="updateIssue">
          <div class="modal-body">

            <label class="form-label" for="issueTitleInput">Title</label>
            <input class="form-control" id="issueTitleInput" v-model="title" type="text" required>

            <label class="form-label" for="issueSummaryInput">Summary</label>
            <input class="form-control" id="issueSummaryInput" v-model="summary" type="text" required>

            <label class="form-label" for="issueDescriptionInput">Description</label>
            <input class="form-control" id="issueDescriptionInput" v-model="description" type="text" required>

            <label class="form-label" for="issueTypeSelect">Type</label>
            <select class="form-select" id="issueTypeSelect" v-model="type" required>
              <option value="TASK">Task</option>
              <option value="BUG">Bug</option>
              <option value="NEW_FEATURE">New feature</option>
            </select>

            <label class="form-label" for="issueStatusSelect">Status</label>
            <select class="form-select" id="issueStatusSelect" v-model="status" required>
              <option value="TODO">Todo</option>
              <option value="IN_PROGRESS">In progress</option>
              <option value="IN_REVIEW">In review</option>
              <option value="DONE">Done</option>
            </select>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {Modal} from "bootstrap";
import IssueService from "@/services/issue.service";

export default {
  name: "EditIssueModal",
  data() {
    return {
      content: "",
      title: null,
      summary: null,
      description: null,
      type: null,
      status: null,
      projectId: null,
      issueId: null,
      modal: null,
      isCorrect: false,
      isSubmitting: false
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.editIssueModal);
  },
  // watch: {
  //   issueId(oldIssueId, newIssueId) {
  //     this.
  //   }
  // },
  methods: {
    show(issueId) {
      this.modal.show();
      this.issueId = issueId;
      this.getIssue();
    },
    // eslint-disable-next-line no-unused-vars
    getIssue(e) {
      IssueService.getIssue(this.issueId).then(
          (response) => {
            this.title = response.data.title
            this.summary = response.data.summary
            this.description = response.data.description
            this.type = response.data.type
            this.status = response.data.status
            this.projectId = response.data.projectId
          },
          (error) => {
            this.content =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
          }
      )
    },
    updateIssue() {
      IssueService.updateIssue(this.issueId, this.title, this.summary, this.description, this.type, this.status)
    }
  }
}
</script>

<style scoped>

</style>