import type { ReactNode } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

interface Props {
    children: ReactNode;
}

export default function App({ children }: Props) {
    return (
        <>
            <Navbar />
            <div className="view-box">{children}</div>
        </>
    );
}
