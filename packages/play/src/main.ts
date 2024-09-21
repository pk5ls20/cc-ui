import { createApp } from "vue";
import App from "./app.vue";
import CUI from "c-ui/components";
import { CButton } from "c-ui";
import { CTree } from "c-ui";
console.log(CUI);
console.log(CTree);

const app = createApp(App);
app.use(CButton as any);
app.use(CTree as any);
app.mount("#app");
