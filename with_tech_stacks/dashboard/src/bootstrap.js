import { createApp } from "vue";
import DashBoard from "./components/Dashboard.vue";

const mount = (el) => {
	const app = createApp(DashBoard);
	app.mount(el);
};
if (process.env.NODE_ENV !== "production") {
	const devRoot = document.querySelector("#_dashboard-dev-root");
	mount(devRoot);
}

export { mount };
