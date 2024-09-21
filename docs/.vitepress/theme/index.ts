import type { App } from "vue";
import Theme from "vitepress/theme";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import CUI from "c-ui";

import "./style.scss";
import "@vitepress-demo-preview/component/dist/style.css";

export default {
  ...Theme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(CUI);
  }
};
