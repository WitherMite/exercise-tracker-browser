import type { ReactNode } from "react";
import Navbar from "../navbar/Navbar";

interface Props {
    children: ReactNode;
}

export default function PageContainer({ children }: Props) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
