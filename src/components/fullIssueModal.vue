<template>
  <div ref="fullIssueModal" class="modal fade" id="fullIssueModal" tabindex="-1" aria-labelledby="addProjectModal"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Issue</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit="createIssue">
          <div class="modal-body">

<!--            <label class="form-label" for="issueTitleInput">Title</label>-->
<!--            <input class="form-control" id="issueTitleInput" v-model="title" type="text" required>-->

            <p class="text-start fs-3">{{title}}</p>

<!--            <label class="form-label" for="issueSummaryInput">Summary</label>-->
<!--            <input class="form-control" id="issueSummaryInput" v-model="summary" type="text" required>-->

            <p class="text-start text-muted">{{summary}}</p>

<!--            <label class="form-label" for="issueDescriptionInput">Description</label>-->
<!--            <input class="form-control" id="issueDescriptionInput" v-model="description" type="text" required>-->

            <p class="text-start">{{description}}</p>


            <div class="mb-3">
              <label class="form-label" for="commentInput">Comments</label>
              <textarea class="form-control" id="commentInput" v-model="comment" type="text" rows="3" required/>
              <button class="btn btn-primary" @click="addComment">Оставить комментарий</button>

              <div v-for="comment in comments" v-bind:key="comment.id">
                <p>{{comment.text}}</p>
              </div>
            </div>
<!--            <label class="form-label" for="issueTypeSelect">Type</label>-->
<!--            <select class="form-select" id="issueTypeSelect" v-model="type" required>-->
<!--              <option value="TASK">Task</option>-->
<!--              <option value="BUG">Bug</option>-->
<!--              <option value="NEW_FEATURE">New feature</option>-->
<!--            </select>-->
            <!--            <label class="form-label" for="projectTitleInput">Title</label>-->
            <!--            <input v-model="title" type="text" class="form-control" id="projectTitleInput" required>-->
            <!--            <label class="form-label">Description - {{ content }}</label>-->
            <!--            <input v-model="description" type="text" class="form-control" id="projectDescriptionInput">-->

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<!--            <button type="submit" class="btn btn-primary">submit</button>-->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {Modal} from "bootstrap";
import IssueService from "@/services/issue.service";
import CommentService from "@/services/comment.service";

export default {
  name: "fullIssueModal",
  data() {
    return {
      comment: "",
      comments: [],
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
    this.modal = new Modal(this.$refs.fullIssueModal);
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    show(issueId) {
      this.modal.show();
      this.issueId = issueId;
      this.getIssue();
      this.getComments()
    },
    getIssue() {
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
    getComments() {
      CommentService.getComments(this.issueId).then(
          (response) => {
            this.comments = response.data
          }
      )
    },
    addComment() {
      if(!this.comment) {
        return;
      }
      CommentService.addComment(this.comment, this.issueId, this.currentUser.id).then(
          // eslint-disable-next-line no-unused-vars
          (response) => {
            this.getComments()
          }
      )
    }
  }
}
</script>

<style scoped>

</style>