import { createBrowserRouter } from "react-router";
import Landing from "./views/landing/Landing";
import PageNotFound from "./errors/PageNotFound";
import Dashboard from "./views/dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        errorElement: <PageNotFound />,
    },
    {
        path: "/home",
        element: <Dashboard />,
    },
]);

export default router;
