<template>
  <div class="container">
    <h3>
      <strong>{{name}}</strong> Profile
    </h3>
    <form @submit="uploadFile">
      <div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input ref="file" class="form-control" type="file" id="formFile" accept="image/*" @change="selectFile">
      </div>
      <button class="btn btn-primary" type="submit">submit</button>
    </form>

<!--    <header class="jumbotron">-->
<!--      <h3>-->
<!--        <strong>{{currentUser.username}}</strong> Profile-->
<!--      </h3>-->
<!--    </header>-->
<!--    <p>-->
<!--      <strong>Token:</strong>-->
<!--      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}-->
<!--    </p>-->
<!--    <p>-->
<!--      <strong>Id:</strong>-->
<!--      {{currentUser.id}}-->
<!--    </p>-->
<!--    <p>-->
<!--      <strong>Email:</strong>-->
<!--      {{currentUser.email}}-->
<!--    </p>-->
<!--    <strong>Authorities:</strong>-->
<!--    <ul>-->
<!--      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>-->
<!--    </ul>-->
  </div>
</template>

<script>
import fileService from "@/services/file.service";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Profile",
  data() {
    return {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      fileInfos: []
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("login")
    }
  },
  methods: {
    selectFile() {
      this.selectedFiles = this.$refs.file.files
    },
    uploadFile() {
      this.currentFile = this.selectedFiles[0];
      fileService.uploadFile(this.currentFile).then(
          // eslint-disable-next-line no-unused-vars
          (response) => {
            this.fileInfos = response.data;
          }
      )
    }
  }
}
</script>

<style scoped>

</style>