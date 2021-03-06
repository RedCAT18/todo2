/**
 * Created by RedCAT on 2017-06-05.
 */
import Login from './Login.vue';

//lazy loading
const Main = resolve => require(['./Main.vue'], resolve);
const Inbox = resolve => require(['./components/contents/Inbox.vue'], resolve);
const Today = resolve => require(['./components/contents/Today.vue'], resolve);
const NextWeek = resolve => require(['./components/contents/Nextweek.vue'], resolve);
const Register = resolve => require(['./Register.vue'], resolve);

export const routes = [
    { path: '/', component: Login, name: 'login'},
    { path: '/register', component: Register },
    { path: '/main', component: Main, name: 'main',  meta: { requiresAuth: true }, children: [
        { path :'/inbox', component: Inbox, name:'inbox' },
        { path: '/today', component: Today },
        { path: '/nextweek', component: NextWeek }
    ]},
    {path: '/redirect', redirect: '/'}
    // {path: '*', ....}
];