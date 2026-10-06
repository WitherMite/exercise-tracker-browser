import { createBrowserRouter } from "react-router";
import App from "./App";
import PageNotFound from "./errors/PageNotFound";
import Dashboard from "./views/dashboard/Dashboard";
import Exercises from "./views/exercises/Exercises";
import Landing from "./views/landing/Landing";
import Profile from "./views/profile/Profile";
import Login from "./views/login/Login";
import getUserData from "./api/getUserData";
import loginUser from "./api/loginUser";

// might extract specific route objects to the relevant views folder, and just import those here?

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
