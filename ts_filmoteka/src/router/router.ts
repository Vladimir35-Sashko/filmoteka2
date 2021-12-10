import Vue from "vue";
import Router from "vue-router";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../components/Library' or its ... Remove this comment to see the full error message
import Library from "../components/Library";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../components/Content' or its ... Remove this comment to see the full error message
import Content from "../components/Content";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Content",
      component: Content,
      props: true,
    },
    {
      path: "/library",
      name: "library",
      component: Library,
      props: true,
    },
  ],
});

export default router;
