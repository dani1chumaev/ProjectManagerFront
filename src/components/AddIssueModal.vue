<template>

  <!--  data-bs-toggle="modal" data-bs-target="#addIssueModal"-->
  <button type="button" class="btn btn-primary" v-on:click="this.show">Add issue
  </button>

  <div ref="modal" class="modal fade" id="addIssueModal" tabindex="-1" aria-labelledby="addProjectModal"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Issue</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit="createIssue">
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

            <div class="mb-3">

              <label class="form-label" for="assignedUserSelect">Assigned</label>
              <select class="form-select" id="assignedUserSelect" v-model="assignedUser" required>
                <option v-for="user in users" v-bind:key="user.id" :value="user">
                  {{user.username}}
                </option>
              </select>

            </div>
            <!--            <label class="form-label" for="projectTitleInput">Title</label>-->
            <!--            <input v-model="title" type="text" class="form-control" id="projectTitleInput" required>-->
            <!--            <label class="form-label">Description - {{ content }}</label>-->
            <!--            <input v-model="description" type="text" class="form-control" id="projectDescriptionInput">-->

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
import {Modal} from "bootstrap"
// eslint-disable-next-line no-unused-vars
import IssueService from "@/services/issue.service";
import UserService from "@/services/user.service";

export default {
  name: "AddIssueModal",
  props: {
    projectId: Number,
    issueId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      content: "",
      title: null,
      summary: null,
      description: null,
      type: null,
      modal: null,
      isCorrect: false,
      isSubmitting: false,
      assignedUser: undefined,
      users: [
        {
          id: 1,
          username: "test1"
        },
        {
          id: 2,
          username: "test2"
        }
      ],
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  methods: {
    show() {
      this.modal.show();
      if (this.issueId) {
        IssueService.getIssue(this.issueId).then(
            (response) => {
              this.title = response.data.title
              this.summary = response.data.summary
              this.description = response.data.description
              this.type = response.data.type
            },
            (error) => {
              this.content =
                  (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                  error.message ||
                  error.toString();
            }
        );
      } else {
        this.getProjectUsers();
      }
    },
    createIssue(e) {
      IssueService.addIssue(this.title, this.summary, this.description, this.type, "TODO", this.projectId, this.assignedUser.id).then(
          // eslint-disable-next-line no-unused-vars
          (response) => {

          },
          (error) => {
            this.content =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            e.preventDefault();
            e.stopPropagation();
          }
      )
      // this.modal.show();

      if (this.isSubmitting) {
        e.preventDefault();
        e.stopPropagation();
        return;
      } else {
        this.modal.hide();
      }
    },
    getIssue(issueId) {
      IssueService.getIssue(issueId);
    },
    getProjectUsers() {
      UserService.getProjectUsers(this.projectId).then(
          (response) => {
            this.users = response.data
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
  },

}
</script>

<style scoped>

</style>