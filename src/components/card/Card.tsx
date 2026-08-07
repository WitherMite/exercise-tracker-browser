import type { ReactNode } from "react";
import style from "./Card.module.css";

interface Props {
    className?: string;
    children: ReactNode;
}

export default function Card({ className, children }: Props) {
    return <div className={`${style.card} ${className}`}>{children}</div>;
}
