import { createBrowserRouter } from "react-router";
import Landing from "./views/landing/Landing";
import PageNotFound from "./errors/PageNotFound";
import Dashboard from "./views/dashboard/Dashboard";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App>
                <Landing />
            </App>
        ),
        errorElement: <PageNotFound />,
    },
    {
        path: "/home",
        element: (
            <App>
                <Dashboard />
            </App>
        ),
    },
]);

export default router;
