import { createBrowserRouter } from "react-router";
import Home from "./components/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

export default router;
