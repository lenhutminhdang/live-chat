import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// firebase auth service
import { projectAuth } from "@/firebase/config";

let app;

projectAuth.onAuthStateChanged(() => {
  // run once
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});
