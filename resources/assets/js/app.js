
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('ExampleComponent', require('./components/ExampleComponent.vue'));
Vue.component('NavBar', require('./components/NavBar.vue'));
Vue.component('EssayForm', require('./components/EssayForm.vue'));
Vue.component('ApplicantForm', require('./components/ApplicantForm.vue'));
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

const app = new Vue({
    el: '#app'
});
