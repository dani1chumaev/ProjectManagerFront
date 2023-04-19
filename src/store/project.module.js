

const initialProject = 1

export const currentProject = {
    namespaced: true,
    state: initialProject,
    mutations: {
        changeProject(state, newProject) {
            state = newProject;
        }
    }
}