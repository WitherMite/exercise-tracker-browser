import type { ReactNode } from "react";
import Card from "../../components/card/Card";
import SearchHeader from "../../components/search-header/SearchHeader";
import style from "./Exercises.module.css";

const categories = [
    { id: 0, name: "Any" },
    { id: 1, name: "Running" },
    { id: 2, name: "Weightlifting" },
];

export default function Exercises() {
    return (
        <>
            <SearchHeader
                label="EXERCISE LIBRARY"
                categories={categories}
                className={style.searchHeader}
            />
            <main>
                <p className={style.exerciseCount}>24 Exercises</p>
                <div className={style.cardGrid}>{placeholderCards(24)}</div>
            </main>
        </>
    );
}

function placeholderCards(count: number) {
    const cards: ReactNode[] = [];
    for (let i = 0; i < count; i++) {
        cards.push(
            <Card key={i}>
                <div>{i + 1}</div>
            </Card>,
        );
    }
    return cards;
}
