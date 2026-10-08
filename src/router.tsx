import { createBrowserRouter } from "react-router";
import App from "./App";
import GlobalErrorBoundary from "./errors/GlobalErrorBoundary";
import Dashboard from "./views/dashboard/Dashboard";
import Exercises from "./views/exercises/Exercises";
import Landing from "./views/landing/Landing";
import Profile from "./views/profile/Profile";
import Login from "./views/login/Login";
import getUserData from "./api/getUserData";
import loginUser from "./api/loginUser";
import Register from "./views/register/register";

// might extract specific route objects to the relevant views folder, and just import those here?

const router = createBrowserRouter([
    {
        path: "/",
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
            {
                path: "/login",
                element: <Login />,
                action: async ({ request }) => {
                    const formData = await request.formData();
                    const username = formData.get("username");
                    const password = formData.get("password");
                    if (
                        typeof username !== "string" ||
                        typeof password !== "string"
                    ) {
                        // should change this to be validated before it gets here later, and error if is wrong
                        return;
                    }
                    await loginUser({ username, password });
                    return;
                },
            },
            {
                path: "/register",
                element: <Register />,
                action: async ({ request }) => {
                    const formData = await request.formData();
                    const username = formData.get("username");
                    const password = formData.get("password");
                    const confPassword = formData.get("confirm-password");
                    if (
                        typeof username !== "string" ||
                        typeof password !== "string" ||
                        typeof confPassword !== "string" ||
                        password !== confPassword
                    ) {
                        // should change this to be validated before it gets here later, and error if is wrong
                        return;
                    }
                    // await registerUser({ username, password });
                    return;
                },
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
