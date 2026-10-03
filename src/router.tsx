import { createBrowserRouter } from "react-router";
import PageNotFound from "./errors/PageNotFound";
import Dashboard from "./views/dashboard/Dashboard";
import Exercises from "./views/exercises/Exercises";
import Landing from "./views/landing/Landing";
import App from "./App";
import Profile from "./views/profile/Profile";
import getUserData from "./api/getUserData";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: (
            <App>
                <PageNotFound />
            </App>
        ),
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: "/home",
                element: <Dashboard />,
                loader: async () => {
                    return { user: await getUserData() };
                },
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/exercises",
                element: <Exercises />,
            },
        ],
    },
]);

export default router;
