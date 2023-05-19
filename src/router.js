import { createWebHashHistory, createRouter } from "vue-router";

const routes =  [
   {
    path: "/login",
    name: "login",
    component: () => import("./components/LoginPlayer")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("./components/NavigationBar"),
     children: [
                 {
                    path: "/sheet",
                    name: "sheet",
                    component: () => import("./components/CharacterSheet")
  },
            ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;