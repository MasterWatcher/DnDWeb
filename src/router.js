import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/sheet",
    name: "sheet",
    component: () => import("./components/CharacterSheet")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;