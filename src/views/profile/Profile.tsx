import Card from "../../components/card/Card";
import style from "./Profile.module.css";

export default function Profile() {
    return (
        <>
            <Card className={style.profileCard}>Profile Card</Card>
            <section>
                <h2 className={style.workoutHeader}>Workouts:</h2>
                <ul className={style.workoutList}>
                    {placeholderWorkouts().map((workout, i) => (
                        <li key={i}>
                            <Card>{workout}</Card>
                        </li>
                    ))}
                </ul>
                <div className={style.pageControls}>
                    {"<pagination controls>"}
                </div>
            </section>
        </>
    );
}

function placeholderWorkouts() {
    return [1, 2, 3, 4, 5, 6, 7, 8];
}
