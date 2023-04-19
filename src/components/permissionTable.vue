<template>

  <div>test</div>
  <div class="accordio">test 1.1</div>

  <div class="btn btn-primary" @click="getProjectPermission">dsfdgd</div>

  <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Permission</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in users" v-bind:key="user.id" @click="toIssues(project.id)">
      <td>{{ user.username }}</td>
      <td>
        <div class="row">
          <div class="col">
            <div v-for="permission in user.permissions" v-bind:key="permission">
              {{ permission }}
            </div>
          </div>
          <div class="col">
            <div class="fs-5" @click.stop>
              <button class="btn btn-outline-danger">
                <i class="bi bi-bucket-fill" style="color: red" @click="deleteProject(project.id)"></i>
              </button>
              <button class="btn btn-outline-warning">
                <i class="bi bi-pen-fill" style="color: orange" @click="showEditProjectModal(project.id)"></i>
              </button>
            </div>
          </div>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import UserService from "@/services/user.service";
import ProjectService from "@/services/project.service";

export default {
  name: "permissionTable",
  data() {
    return {
      users: [],
      projectId: this.$route.params.projectId,
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    getProjectUsers() {
      UserService.getProjectUsers(this.projectId)
    },
    getProjectPermission() {
      ProjectService.getProjectPermissions(this.projectId).then(
          (response) => {
            this.users = response.data
          }
      );
    }
  }
}
</script>

<style scoped>

</style>