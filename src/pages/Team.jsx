import { Outlet,Link } from "react-router";
import { useState } from "react";

export default function Dashboard() {
    return (
        <>
        <h1>The Team</h1>
            {/* will either be <WholeTeam> or <Gary> */}
            <ul>
            <li><Link to="/team/formEx">To The Form</Link></li>
            <li><Link to="/team/gary">Gary!</Link></li>
            </ul>
        <Outlet />
        </>
    );
}