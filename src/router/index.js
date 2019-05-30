import Vue from 'vue';
import Router from 'vue-router';
import Navigation from '../components/navigation/Navigation';
import Notes from '../components/notes/Notes';
import Footer from '../components/footer/Footer';
import NoteDetails from '../components/notedetails/NoteDetails';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Notes',
      components: {
        navigation: Navigation,
        default: Notes,
        footer: Footer,
      },
    },
    {
      path: '/note/:id',
      name: 'Note',
      components: {
        navigation: Navigation,
        default: NoteDetails,
        footer: Footer,
      },
    }
  ],
});
