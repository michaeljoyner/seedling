
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

Vue.component('password-email', require('./components/PasswordEmailRequest.vue'));
Vue.component('modal', require('./components/Modal.vue'));
Vue.component('add-user', require('./components/AddUser.vue'));
Vue.component('delete-button', require('./components/DeleteButton.vue'));
Vue.component('user-app', require('./components/UsersApp.vue'));

window.eventHub = new Vue();
window.swal = require('sweetalert');

const app = new Vue({
    el: '#app',

    created() {
        eventHub.$on('user-alert', this.showAlert)
    },

    methods: {
        showAlert(message) {
            swal({
                type: message.type,
                title: message.title,
                text: message.text,
                showConfirmButton: message.confirm
            });
        }
    }
});
