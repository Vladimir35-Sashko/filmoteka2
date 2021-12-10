import Vue from "vue";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './App.vue' or its correspondin... Remove this comment to see the full error message
import App from "./App.vue";
import router from "./router/router";
import store from "./vuex/store";
import "./sass/main.scss";
import "material-design-icons-iconfont";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store,
    router
}).$mount("#app");