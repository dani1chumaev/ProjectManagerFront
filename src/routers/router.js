import {createWebHistory, createRouter} from "vue-router";
import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
const Profile = () => import("@/components/Profile.vue")
const BoardAdmin = () => import("@/components/BoardAdmin.vue")
const BoardUser = () => import("@/components/BoardUser.vue")
const ProjectBoard = () => import("@/components/ProjectBoard")
const IssueBoard = () => import("@/components/IssueBoard")
const PermissionTable = () => import("@/components/permissionTable")
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile,
    },
    {
        path: "/admin",
        name: "admin",
        component: BoardAdmin,
    },
    {
        path: "/user",
        name: "user",
        component: BoardUser,
    },
    {
        path: "/project",
        name: "project",
        component: ProjectBoard,
    },
    {
        path: "/project/:projectId/issue",
        name: "issue",
        component: IssueBoard,
        props: true,
    },
    {
        path: "/project/:projectId/permissions",
        name: "permissions",
        component: PermissionTable,
        props: true,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router