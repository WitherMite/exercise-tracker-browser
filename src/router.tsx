import { createBrowserRouter } from "react-router";
import PageNotFound from "./errors/PageNotFound";
import Dashboard from "./views/dashboard/Dashboard";
import Exercises from "./views/exercises/Exercises";
import Landing from "./views/landing/Landing";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App>
                <Landing />
            </App>
        ),
        errorElement: (
            <App>
                <PageNotFound />
            </App>
        ),
    },
    {
        path: "/home",
        element: (
            <App>
                <Dashboard />
            </App>
        ),
    },
    {
        path: "/exercises",
        element: (
            <App>
                <Exercises />
            </App>
        ),
    },
]);

export default router;
