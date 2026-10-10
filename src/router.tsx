import { createBrowserRouter } from "react-router";
import App from "./App";
import GlobalErrorBoundary from "./errors/GlobalErrorBoundary";
import Exercises from "./views/exercises/Exercises";
import Landing from "./views/landing/Landing";
import Profile from "./views/profile/Profile";
import { loginRoute } from "./views/login/roginRoute";
import { registerRoute } from "./views/register/registerRoute";
import { dashboardRoute } from "./views/dashboard/dashboardRoute";

const router = createBrowserRouter([
    {
        element: <App />,
        loader: () => {
            const isLoggedIn =
                localStorage.getItem("username") && localStorage.getItem("jwt");
            return { isLoggedIn };
        },
        errorElement: (
            <App>
                <GlobalErrorBoundary />
            </App>
        ),
        children: [
            {
                index: true,
                element: <Landing />,
            },
            loginRoute,
            registerRoute,
            dashboardRoute,
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
