import Card from "../../components/card/Card";
import data from "./DashboardData";
import style from "./Dashboard.module.css";

function DashboardHeader() {
    return (
        <header className={style.dashboardHeader}>
            <div className={style.monoText}>{"<today's date>"}</div>
            <h1>
                {"" /* todo: generate greeting based on local time */}
                Good Morning,
                <br></br>
                <span className={style.displayname}>{data.displayname}.</span>
            </h1>
        </header>
    );
}

// todo: generate cards from data
export default function Dashboard() {
    return (
        <>
            <DashboardHeader />
            <main>
                <div className={style.overview}>
                    <Card>
                        <div>{"1"}</div>
                    </Card>
                    <Card>
                        <div>{"2"}</div>
                    </Card>
                    <Card>
                        <div>{"3"}</div>
                    </Card>
                </div>
                <div className={style.stats}>
                    <Card>
                        <div>{"1"}</div>
                    </Card>
                    <Card>
                        <div>{"2"}</div>
                    </Card>
                    <Card>
                        <div>{"3"}</div>
                    </Card>
                    <Card>
                        <div>{"4"}</div>
                    </Card>
                </div>
            </main>
        </>
    );
}
