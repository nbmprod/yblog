import { createRouter, createWebHistory } from 'vue-router';
import Grid from './src/components/Grid.vue';
import Article from './src/components/article/Article.vue';
// import NotFound from './views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Grid
  },
  {
    path: '/article',
    name: 'testArticle',
    component: Article,
    props: true
  },
//   {
//     path: '/:catchAll(.*)',
//     name: 'notFound',
//     component: NotFound
//   }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
