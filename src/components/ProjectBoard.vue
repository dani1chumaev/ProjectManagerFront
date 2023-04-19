<template>
  <div class="container">

    <edit-project-modal ref="editProjectModal"/>

    <div class="mb-3 mt-3">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProjectModal">Add project
      </button>
      <AddProjectModal/>
    </div>

    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="project in projects" v-bind:key="project.id" @click="toIssues(project.id)">
        <td>{{ project.id }}</td>
        <td>{{ project.title }}</td>
        <td>{{ project.description }}</td>
        <td>
          <div class="fs-5" @click.stop>
            <button class="btn btn-outline-danger">
              <i class="bi bi-bucket-fill" style="color: red" @click="deleteProject(project.id)"></i>
            </button>
            <button class="btn btn-outline-warning">
              <i class="bi bi-pen-fill" style="color: orange" @click="showEditProjectModal(project.id)"></i>
            </button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProjectService from "@/services/project.service";
import AddProjectModal from "@/components/AddProjectModal";
import EditProjectModal from "@/components/EditProjectModal";

export default {
  name: "ProjectBoard",
  components: {
    AddProjectModal,
    EditProjectModal
  },
  data() {
    return {
      projects: []
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    ProjectService.getProjects(this.currentUser).then(
        (response) => {
          this.projects = response.data;
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
  methods: {
    showEditProjectModal(projectId) {
      this.$refs.editProjectModal.show(projectId);
    },
    deleteProject(projectId) {
      ProjectService.deleteProject(projectId);
    },
    // eslint-disable-next-line no-unused-vars
    toIssues(projectId) {
      this.$store.state.currentProject.project;
      this.$store.commit("currentProject/changeProject", projectId)
      this.$router.push({
        name: "issue",
        params: {projectId: projectId}
      })
    }
  }
}
</script>

<style scoped>

</style>