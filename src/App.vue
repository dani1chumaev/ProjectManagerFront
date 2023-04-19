<template>


<!--  <nav-bar ref="child"/>-->
<!--&lt;!&ndash;  <SignInModal/>&ndash;&gt;-->
<!--  <button @click="$refs.child.count++">Say hello</button>-->
<!--  <button class="btn btn-default">-->
<!--    <img src="http://i.stack.imgur.com/e2S63.png" width="20"  alt=""/> Sign In with Facebook-->
<!--  </button>-->

<!--  <div class="dropdown">-->
<!--    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--      Dropdown button-->
<!--    </button>-->
<!--    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">-->
<!--      <li><a class="dropdown-item" href="#">Action</a></li>-->
<!--      <li><a class="dropdown-item" href="#">Another action</a></li>-->
<!--      <li><a class="dropdown-item" href="#">Something else here</a></li>-->
<!--    </ul>-->
<!--  </div>-->

<!--  <div class="container mt-5">-->
<!--    <div class="row">-->
<!--      <div class="col form-check-inline">-->
<!--        <input v-model="newTask" placeholder="Enter task" @keyup.enter="add">-->
<!--        <button class="btn btn-primary ms-2" @click="add">add</button>-->
<!--      </div>-->

<!--    </div>-->

<!--    <div class="row mt-3">-->
<!--      <div class="col-md-3">-->
<!--        <div class="p-2 alert-secondary">-->
<!--          <h3>Backlog</h3>-->
<!--          <ul class="list-group kanban-column">-->
<!--            <li class="list-group-item" v-for="(element, index) in arrBacklog" :key="element.name">-->
<!--              {{index}} : {{element.name}}-->
<!--              <select class="form-select" @change="changeStatus($event, arrBacklog, index)" aria-label="Default select example">-->
<!--                <option value="0">default</option>-->
<!--                <option value="1">One</option>-->
<!--                <option value="2">Two</option>-->
<!--                <option value="3">Three</option>-->
<!--              </select>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="col-md-3">-->
<!--        <div class="p-2 alert-primary">-->
<!--          <h3>InProgress</h3>-->
<!--          <draggable class="list-group kanban-column" group="issue" v-model="arrInProgress" item-key="name">-->
<!--            <template #item="{element}">-->
<!--              <div class="list-group-item">-->

<!--                <div class="card">-->
<!--                  <div class="card-body">-->
<!--                    <h5 class="card-title">Card</h5>-->
<!--                    <p class="card-text">{{element.name}}</p>-->
<!--                    <div class="form-inline">-->
<!--                      <button class="btn btn-primary">button1</button>-->
<!--                      <button class="btn btn-danger">button2</button>-->
<!--                      <tag :color="'warning'"></tag>-->
<!--                      <img class="rounded-circle" width="24" height="24" src="./assets/logo.png">-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </template>-->
<!--          </draggable>-->
<!--&lt;!&ndash;          <ul class="list-group kanban-column">&ndash;&gt;-->
<!--&lt;!&ndash;            <li class="list-group-item" v-for="element in arrInProgress" :key="element.name">&ndash;&gt;-->
<!--&lt;!&ndash;              {{element.name}}&ndash;&gt;-->
<!--&lt;!&ndash;            </li>&ndash;&gt;-->
<!--&lt;!&ndash;          </ul>&ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->


<!--      <div class="col-md-3">-->
<!--        <div class="p-2 alert-warning">-->
<!--          <h3>InReview</h3>-->
<!--          <draggable class="list-group kanban-column" group="issue" v-model="arrInReview" item-key="name">-->
<!--            <template #item="{element}">-->
<!--              <div class="list-group-item"> {{element.name}} </div>-->
<!--            </template>-->
<!--          </draggable>-->
<!--&lt;!&ndash;          <ul class="list-group kanban-column">&ndash;&gt;-->
<!--&lt;!&ndash;            <li class="list-group-item" v-for="element in arrInReview" :key="element.name">&ndash;&gt;-->
<!--&lt;!&ndash;              {{element.name}}&ndash;&gt;-->
<!--&lt;!&ndash;            </li>&ndash;&gt;-->
<!--&lt;!&ndash;          </ul>&ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="col-md-3">-->
<!--        <div class="p-2 alert-success">-->
<!--          <h3>Done</h3>-->
<!--          <ul class="list-group kanban-column">-->
<!--            <li class="list-group-item" v-for="element in arrDone" :key="element.name">-->

<!--              {{element.name}}-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" class="navbar-brand">Project manager</a>
      <div class="navbar-nav mr-auto">
<!--        <li class="nav-item">-->
<!--          <router-link to="/home" class="nav-link">-->
<!--            <font-awesome-icon icon="home" /> Home-->
<!--          </router-link>-->
<!--        </li>-->
<!--        <li v-if="showAdminBoard" class="nav-item">-->
<!--          <router-link to="/admin" class="nav-link">Admin Board</router-link>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>-->
<!--        </li>-->
      </div>
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </div>
      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/project" class="nav-link">
            <font-awesome-icon icon="user" />
            Projects
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>

</template>

<script>


// import NavBar from "@/components/NavBar";
// import tag from "@/components/tag";
// import draggable from "vuedraggable";
// import SignInModal from "@/components/SignInModal";

export default {
  name: 'App',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }
      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    }
  }
  // components: {
  //   NavBar,
  //   draggable,
  //   tag
  //   // SignInModal
  // },
  // data() {
  //   return {
  //     drag: true,
  //     newTask: "",
  //     arrBacklog: [
  //       {name: "c"},
  //       {name: "d"},
  //       {name: "e"},
  //     ],
  //     arrToDo: [],
  //     arrInProgress: [
  //       {name: "1"},
  //       {name: "2"},
  //       {name: "3"},
  //     ],
  //     arrInReview: [
  //       {name: "5"},
  //       {name: "6"}
  //     ],
  //     arrDone: []
  //   }
  // },
  // methods: {
  //   add() {
  //     if (this.newTask) {
  //       this.arrBacklog.push({name: this.newTask});
  //       this.newTask = ""
  //     }
  //   },
  //   changeStatus(event, arr, index) {
  //     console.log(event.target.value);
  //     console.log(arr);
  //     console.log(index);
  //     var element = arr[index];
  //     arr.splice(index, 1);
  //
  //     switch (event.target.value) {
  //       case "1":
  //         console.log(1);
  //         this.arrBacklog.push(element)
  //         break;
  //       case "2":
  //         console.log(2);
  //         this.arrInProgress.push(element)
  //         break;
  //       case "3":
  //         console.log(3);
  //         this.arrInReview.push(element)
  //         break;
  //       default:
  //         console.error("error");
  //         break;
  //     }
  //
  //   }
  // }

}
</script>

<style>
/*.kanban-column {*/
/*  min-height: 300px;*/
/*}*/
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
