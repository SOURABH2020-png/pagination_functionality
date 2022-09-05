import { lazy } from "react";

const Dashboard = lazy(() => import('../views'))

const routes = [
    {path: "/", name: "Dashboard", component: Dashboard}
]

export default routes;

