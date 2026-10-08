import type { ReactNode } from "react";
import { Outlet, useLoaderData } from "react-router";
import Navbar from "./components/navbar/Navbar";
import "./styles/App.css";
import { AppContext } from "./AppContext";

interface Props {
    children?: ReactNode;
}

export default function App({ children }: Props) {
    const context = useLoaderData();

    return (
        <AppContext value={context}>
            <Navbar />
            <div className="view-box">{children ?? <Outlet />}</div>
        </AppContext>
    );
}
