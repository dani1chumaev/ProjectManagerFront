import { createApp } from 'vue'
import App from './App.vue'
import router from "@/routers/router";
import store from "@/store";
// import {createRouter, createWebHashHistory} from "vue-router";
// import store from "./store"

// import Home from "./pages/Home";
// import HelloWorld from "@/components/HelloWorld";

// import '@popperjs/core/dist/umd/popper.min.js'


import '@popperjs/core/dist/umd/popper.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


// createApp(App).mount('#app')

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.


// const routes = [
//     {
//         path: '/',
//         name: 'HelloWorld',
//         component: HelloWorld,
//         props: { msg: "Fisting"}
//     },
//     {
//         path: '/about',
//         name: 'about',
//         component: Home
//     },
// ]
//
// const router = createRouter({
//     history: createWebHashHistory(),
//     routes: routes,
// })


const app = createApp(App)

app.use(router)
app.use(store)

// app.use(store)

app.mount('#app')
