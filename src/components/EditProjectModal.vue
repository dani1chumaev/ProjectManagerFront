<template>
  <div ref="editProjectModal" class="modal fade" id="editProjectModal" tabindex="-1" aria-labelledby="addProjectModal"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit project</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit="updateProject">
          <div class="modal-body">

            <label class="form-label" for="issueTitleInput">Title</label>
            <input class="form-control" id="issueTitleInput" v-model="title" type="text" required>

            <label class="form-label" for="issueDescriptionInput">Description</label>
            <input class="form-control" id="issueDescriptionInput" v-model="description" type="text" required>

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
import ProjectService from "@/services/project.service";

export default {
  name: "EditProjectModal",
  data() {
    return {
      content: "",
      title: null,
      description: null,
      projectId: null,
      modal: null,
      isCorrect: false,
      isSubmitting: false
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.editProjectModal);
  },
  methods: {
    show(projectId) {
      this.modal.show();
      this.projectId = projectId;
      this.getProject();
    },
    getProject() {
      ProjectService.getProject(this.projectId).then(
          (response) => {
            this.title = response.data.title
            this.description = response.data.description
          }
      )
    },
    updateProject() {
      ProjectService.updateProject(this.projectId, this.title, this.description)
    }
  }
}
</script>

<style scoped>

</style>