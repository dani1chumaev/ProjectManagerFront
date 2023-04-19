<template>

  <!--  <button type="button" class="btn btn-primary" @click="modal.show()">Add project</button>-->

  <!--  <form class="needs-validation" v-on:submit="createProject">-->
  <div ref="modal" class="modal fade" id="addProjectModal" tabindex="-1" aria-labelledby="addProjectModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add project</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit="createProject">
          <div class="modal-body">

            <label class="form-label" for="projectTitleInput">Title</label>
            <input v-model="title" type="text" class="form-control" id="projectTitleInput" required>
            <label class="form-label">Description</label>
            <input v-model="description" type="text" class="form-control" id="projectDescriptionInput">

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" >submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!--  </form>-->
</template>

<script>
import {Modal} from "bootstrap"
import ProjectService from "@/services/project.service";


export default {
  name: "AddProjectModal",
  // components: {
  //   Form,
  //   Field,
  //   ErrorMessage,
  // },
  data() {
    return {
      content: "",
      message: "",
      title: null,
      description: null,
      modal: null,
      isCorrect: false,
      isSubmitting: true
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    createProject(e) {
      // eslint-disable-next-line no-unused-vars
      // this.modal = Modal.getInstance(document.getElementById('addProjectModal'));
      ProjectService.addProject(this.title, this.description);
      // this.modal.show();
      if (this.isSubmitting) {
        e.preventDefault();
        e.stopPropagation();
        return;
      } else {
        this.modal.hide();
      }
    },
  }
}
</script>

<style scoped>

</style>