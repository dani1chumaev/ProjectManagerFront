<template>
  <div class="row row-cols-auto mb-3 mt-3">
    <div class="col">
      <add-issue-modal v-bind:project-id="projectId"/>
    </div>
    <div class="col">
      <div class="btn btn-primary" @click="toPermissions(this.projectId)">Permissions</div>
    </div>
  </div>
  <edit-issue-modal ref="form" v-bind:issue-id="issueId"/>
  <full-issue-modal ref="fullIssueModal"/>
  <add-user-to-project-modal ref="addUserToProject"/>

<!--  <div class="btn btn-primary" @click="showAddUserToProject">Add user</div>-->
<!--  <div class="btn btn-primary" @click="toPermissions(this.projectId)">Permissions</div>-->


  <div class="container p-0">
    <div class="row">
      <div class="col">
        <div class="card card-border-primary">
          <div class="card-header">
            <h5 class="card-title">TODO</h5>
          </div>
          <div class="card-body p-3">
            <div v-for="issue in todoIssues" v-bind:key="issue.id">
              <div class="card mb-3 bg-light shadow" v-on:click="showFullIssueModal(issue.id)">
                <div class="card-header">
                  <div class="float-start">
                    {{ issue.id }}
                  </div>
                  <div class="dropdown float-end" @click.stop>
                    <a href="#" data-bs-toggle="dropdown">
                      <div class="fs-5">
                        <i class="bi bi-gear"></i>
                      </div>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#" v-on:click="deleteIssue(issue.id)">Delete</a></li>
                      <li><a class="dropdown-item" href="#" v-on:click="showEditIssueModal(issue.id)">Edit</a></li>
                      <li><a class="dropdown-item" href="#" v-on:click="showFullIssueModal(issue.id)">Show</a></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body p-3">
                  <p class="fw-bold">{{ issue.title }}</p>
                  <p>{{ issue.summary }}</p>
                </div>
                <div class="card-footer">
                  <div class="float-start">
                    <tag v-bind:color="issue.type"/>
                  </div>
                  <div class="float-end">
                    {{issue.assignedUserUsername}}
                    <img style="width: 32px" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="avatar"
                         class="rounded-pill">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-border-primary">
          <div class="card-header">
            <h5 class="card-title">In progress</h5>
          </div>
          <div class="card-body p-3">
            <div v-for="issue in inProgressIssues" v-bind:key="issue.id">
              <div class="card mb-3 bg-light shadow" v-on:click="showFullIssueModal(issue.id)">
                <div class="card-header">
                  <div class="float-start">
                    {{ issue.id }}
                  </div>
                  <div class="dropdown float-end" @click.stop>
                    <a href="#" data-bs-toggle="dropdown">
                      <div class="fs-5">
                        <i class="bi bi-gear"></i>
                      </div>
                    </a>
<!--                    <ul class="dropdown-menu">-->
<!--                      <li><a class="dropdown-item" type="submit" href="#" v-on:click="deleteIssue(issue.id)">Delete</a>-->
<!--                      </li>-->
<!--                      <li><a class="dropdown-item" href="#" v-on:click="showEditIssueModal(issue.id)">Edit</a></li>-->
<!--                    </ul>-->
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#" v-on:click="deleteIssue(issue.id)">Delete</a></li>
                      <li><a class="dropdown-item" href="#" v-on:click="showEditIssueModal(issue.id)">Edit</a></li>
                      <li><a class="dropdown-item" href="#" v-on:click="showFullIssueModal(issue.id)">Show</a></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body p-3">
                  <p class="fw-bold">{{ issue.title }}</p>
                  <p>{{ issue.summary }}</p>
                </div>
                <div class="card-footer">
                  <div class="float-start">
                    <tag v-bind:color="issue.type"/>
                  </div>
                  <div class="float-end">
                    {{issue.assignedUserUsername}}
                    <img style="width: 32px" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="avatar"
                         class="rounded-pill">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-border-primary">
          <div class="card-header">
            <h5 class="card-title">In review</h5>
          </div>
          <div class="card-body p-3">
            <div v-for="issue in inReviewIssues" v-bind:key="issue.id">
              <div class="card mb-3 bg-light shadow" v-on:click="showFullIssueModal(issue.id)">
                <div class="card-header">
                  <div class="float-start">
                    {{ issue.id }}
                  </div>
                  <div class="dropdown float-end" @click.stop>
                    <a href="#" data-bs-toggle="dropdown">
                      <div class="fs-5">
                        <i class="bi bi-gear"></i>
                      </div>
                    </a>
<!--                    <ul class="dropdown-menu">-->
<!--                      <li><a class="dropdown-item" type="submit" href="#" v-on:click="deleteIssue(issue.id)">Delete</a>-->
<!--                      </li>-->
<!--                      <li><a class="dropdown-item" href="#" v-on:click="showEditIssueModal(issue.id)">Edit</a></li>-->
<!--                    </ul>-->
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#" v-on:click="deleteIssue(issue.id)">Delete</a></li>
                      <li><a class="dropdown-item" href="#" v-on:click="showEditIssueModal(issue.id)">Edit</a></li>
                      <li><a class="dropdown-item" href="#" v-on:click="showFullIssueModal(issue.id)">Show</a></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body p-3">
                  <p class="fw-bold">{{ issue.title }}</p>
                  <p>{{ issue.summary }}</p>
                </div>
                <div class="card-footer">
                  <div class="float-start">
                    <tag v-bind:color="issue.type"/>
                  </div>
                  <div class="float-end">
                    {{issue.assignedUserUsername}}
                    <img style="width: 32px" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="avatar"
                         class="rounded-pill">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-border-primary">
          <div class="card-header">
            <h5 class="card-title">Done</h5>
          </div>
          <div class="card-body p-3">
            <div v-for="issue in doneIssues" v-bind:key="issue.id">
              <div class="card mb-3 bg-light shadow" v-on:click="showFullIssueModal(issue.id)">
                <div class="card-header">
                  <div class="float-start">
                    {{ issue.id }}
                  </div>
                  <div class="dropdown float-end" @click.stop>
                    <a href="#" data-bs-toggle="dropdown">
                      <div class="fs-5">
                        <i class="bi bi-gear"></i>
                      </div>
                    </a>
<!--                    <ul class="dropdown-menu">-->
<!--                      <li><a class="dropdown-item" type="submit" href="#" v-on:click="deleteIssue(issue.id)">Delete</a>-->
<!--                      </li>-->
<!--                      <li><a class="dropdown-item" href="#" v-on:click="showEditIssueModal(issue.id)">Edit</a></li>-->
<!--                    </ul>-->
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#" v-on:click="deleteIssue(issue.id)">Delete</a></li>
                      <li><a class="dropdown-item" href="#" v-on:click="showEditIssueModal(issue.id)">Edit</a></li>
                      <li><a class="dropdown-item" href="#" v-on:click="showFullIssueModal(issue.id)">Show</a></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body p-3">
                  <p class="fw-bold">{{ issue.title }}</p>
                  <p>{{ issue.summary }}</p>
                </div>
                <div class="card-footer">
                  <div class="float-start">
                    <tag v-bind:color="issue.type"/>
                  </div>
                  <div class="float-end">
                    {{issue.assignedUserUsername}}
                    <img style="width: 32px" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="avatar"
                         class="rounded-pill">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import IssueService from "@/services/issue.service";
import addIssueModal from "@/components/AddIssueModal";
import editIssueModal from "@/components/EditIssueModal";
import fullIssueModal from "@/components/fullIssueModal";
import addUserToProjectModal from "@/components/addUserToProjectModal";
import Tag from "@/components/tag";

// eslint-disable-next-line no-unused-vars
import {Color} from "@/components/tag"

export default {
  name: "IssueBoard",
  components: {
    Tag,
    addIssueModal,
    editIssueModal,
    fullIssueModal,
    addUserToProjectModal
  },
  // props: ["projectId"],
  data() {
    return {
      // projectId: null,
      projectId: this.$route.params.projectId,
      issueId: null,
      todoIssues: [],
      inProgressIssues: [],
      inReviewIssues: [],
      doneIssues: [],
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    // this.projectId = this.$route.params.projectId;
    this.getIssues();
  },
  methods: {
    showAddUserToProject() {
      this.$refs.addUserToProject.show(this.projectId);
    },
    showFullIssueModal(issueId) {
      this.$refs.fullIssueModal.show(issueId);
    },
    showEditIssueModal(issueId) {
      this.$refs.form.show(issueId);
    },
    clearIssues() {
      this.todoIssues = [];
      this.inProgressIssues = [];
      this.inReviewIssues = [];
      this.doneIssues = [];
    },
    getIssues() {
      IssueService.getIssues(this.projectId).then(
          (response) => {
            this.clearIssues();
            response.data.forEach(issue => {
              switch (issue.status) {
                case "TODO":
                  this.todoIssues.push(issue);
                  break;
                case "IN_PROGRESS":
                  this.inProgressIssues.push(issue);
                  break;
                case "IN_REVIEW":
                  this.inReviewIssues.push(issue);
                  break;
                case "DONE":
                  this.doneIssues.push(issue);
                  break;
              }
            })
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
    deleteIssue(issueId) {
      IssueService.deleteIssue(issueId).then(
          // eslint-disable-next-line no-unused-vars
          (response) => {
            this.getIssues();
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
    toPermissions(projectId) {
      this.$router.push({
        name: "permissions",
        params: {projectId: projectId}
      })
    }
  }
}

</script>

<style scoped>

</style>