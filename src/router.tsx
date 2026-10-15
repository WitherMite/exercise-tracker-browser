import { createBrowserRouter } from "react-router";
import App from "./App";
import GlobalErrorBoundary from "./errors/GlobalErrorBoundary";
import Exercises from "./views/exercises/Exercises";
import Landing from "./views/landing/Landing";
import Profile from "./views/profile/Profile";
import { loginRoute } from "./views/login/loginRoute";
import { registerRoute } from "./views/register/registerRoute";
import { dashboardRoute } from "./views/dashboard/dashboardRoute";
import { logoutRoute } from "./views/logout/logoutRoute";

const router = createBrowserRouter([
    {
        element: <App />,
        loader: () => {
            const isLoggedIn = !!localStorage.getItem("jwt");
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
            logoutRoute,
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
