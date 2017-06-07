/**
 * Created by RedCAT on 2017-06-05.
 */
import Login from './Login.vue';

import MenuItem from './components/menu/MenuItem.vue';
import MenuTab from './components/menu/MenuTab.vue';
import MenuTabPanel from './components/menu/MenuTabPanel.vue';

import Inbox from './components/contents/Inbox.vue';
import TodoListTable from './components/contents/TodoListTable.vue';

//lazy loading
const Main = resolve => require(['./Main.vue'], resolve);
const Today = resolve => require(['./components/contents/Today.vue'], resolve);
const NextWeek = resolve => require(['./components/contents/Nextweek.vue'], resolve);
const Register = resolve => require(['./Register.vue'], resolve);

export const routes = [
    { path: '/', component: Login},
    { path: '/register', component: Register },
    { path: '/main', component: Main, name: 'main', children: [
        { path :'/inbox', component: Inbox },
        { path: '/today', component: Today },
        { path: '/nextweek', component: NextWeek }
    ]}
];