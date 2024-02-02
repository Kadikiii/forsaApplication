import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobView from "../views/JobView.vue";
import JobDescriptionView from "../views/JobDescriptionView.vue";
import ApplyJobView from "../views/ApplyJobView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobView,
    },
    {
      path: "/jobs/job",
      name: "job",
      component: JobDescriptionView,
    },
    {
      path: "/jobs/job/apply",
      name: "apply",
      component: ApplyJobView,
    },
  ],
});

export default router;
