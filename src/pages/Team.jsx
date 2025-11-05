import { Outlet,Link } from "react-router";

export default function Dashboard() {
    return (
        <>
        <h1>The Team</h1>
            {/* will either be <WholeTeam> or <Gary> */}
            <Link to="/team/gary">Gary!</Link>
        <Outlet />
        </>
    );
}