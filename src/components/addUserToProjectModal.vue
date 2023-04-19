<template>
  <div ref="addUserToProjectModal" class="modal fade" id="addUserToProjectModal" tabindex="-1"
       aria-labelledby="addProjectModal"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Issue</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label" for="usernameInput">Username</label>
              <input class="form-control" id="usernameInput" v-model="username" type="text" required>
            </div>
            <div class="mb-3">
              <label class="form-label" for="permissionSelect">Summary</label>
              <select class="form-select" id="permissionSelect" v-model="permission" required>
                <option value="PERMISSION_WRITE">Write</option>
                <option value="PERMISSION_READ">Read</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addUserToProject">submit</button>
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
  name: "addUserToProjectModal",
  data() {
    return {
      content: "",
      username: null,
      permission: null,
      projectId: null,
      issueId: null,
      modal: null,
      isCorrect: false,
      isSubmitting: false
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.addUserToProjectModal);
  },
  methods: {
    show(projectId) {
      this.modal.show();
      this.projectId = projectId;
      this.addUserToProject();
    },
    addUserToProject() {
      ProjectService.addUserToProject(this.projectId, this.username, this.permission);
    }
  }
}
</script>

<style scoped>

</style>