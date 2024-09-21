import { makeInstaller } from "@c-ui/utils";
import components from "./components";

const installer = makeInstaller(components);

export * from "@c-ui/components";
export default installer;
