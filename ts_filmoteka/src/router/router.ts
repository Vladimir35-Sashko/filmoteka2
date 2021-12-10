import Vue from 'vue'
import Router from 'vue-router'
import Library from "../components/Library";
import Content from "../components/Content";

Vue.use(Router);


let router = new Router({
    routes: [
        {
            path: '/',
            name: 'Content',
            component: Content,
            props: true
        },
        {
            path: '/library',
            name: 'library',
            component: Library,
            props: true
        },
    ]
})

export default router;
