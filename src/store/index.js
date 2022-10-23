import {createStore} from 'vuex';
import { add } from './modules/add';
import { add_table } from './modules/add-table';

const store = createStore({
    modules : {
        add,
        add_table
    }
});

export default store