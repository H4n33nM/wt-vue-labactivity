import { createApp } from 'vue';
import App from './App.vue';

import MyNavbar from './components/MyNavBar.vue';
import MyContent from './components/MyContent.vue';
import MyFooter from './components/MyFooter.vue';
import MyContactList from './components/MyContactList.vue';
import MyCard from './components/MyCard.vue';
import MyContactAddForm from './components/MyContactAddForm.vue';

const app = createApp(App);
app.component('my-navbar', MyNavbar);
app.component('my-content', MyContent);
app.component('my-footer', MyFooter);
app.component('my-contact-list', MyContactList);
app.component('my-card', MyCard);
app.component('my-add-contact-form', MyContactAddForm);

app.mount('#app');
