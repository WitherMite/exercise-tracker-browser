import type { ReactNode } from "react";
import style from "./Card.module.css";

interface Props {
    children: ReactNode;
}

export default function Card({ children }: Props) {
    return <div className={style.card}>{children}</div>;
}
