/**
 * Created by ebi on 2017/2/8.
 */

import index from './pages/index.vue'
import list from './pages/product/list.vue'
// const detail = resolve => require(['./foo.vue'], resolve);

const routes = [
    { path: '/', component: foo },
    { path: '/', component: home }
    // { path: '/list/:id', component: list },
    // { path: '/product/:id', component: detail }
];
export default routes