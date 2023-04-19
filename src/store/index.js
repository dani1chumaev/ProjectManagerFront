import {createStore} from 'vuex';
import {auth} from '@/store/auth.module';
import {currentProject} from '@/store/project.module'

const store = createStore({
    modules: {
        auth,
        currentProject
    },
});

export default store;