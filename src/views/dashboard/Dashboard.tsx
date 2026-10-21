import type { User } from "../../api/types/User";
import Card from "../../components/card/Card";
import GlobalModal from "../../components/globalModal/GlobalModal";
import Login from "../login/Login";
import style from "./Dashboard.module.css";
import { useLoaderData } from "react-router";
import type { dashboardLoaderData } from "./dashboardRoute";

// todo: generate cards from data (will need to add a user dashboard endpoint to api and decide what to show here)
export default function Dashboard() {
    const { user } = useLoaderData<dashboardLoaderData>();
    if (!user) {
        return (
            <GlobalModal>
                <Login />
            </GlobalModal>
        );
    }
    return (
        <>
            <DashboardHeader user={user} />
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

interface HeaderProps {
    user: User;
}

function DashboardHeader({ user }: HeaderProps) {
    return (
        <header className={style.dashboardHeader}>
            <div className={style.monoText}>{"<today's date>"}</div>
            <h1>
                {
                    "GOOD MORNING," /* todo: generate greeting based on local time */
                }
                <br></br>
                <span className={style.displayname}>
                    {user.displayname.toUpperCase()}
                </span>
            </h1>
        </header>
    );
}
