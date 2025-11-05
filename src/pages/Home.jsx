import { Link } from "react-router";
export default function Home(){
    return (
        <>
        <h1>Hello home</h1>
        <h2>This is the home page</h2>
        <Link to="/team/gary">Gary!</Link>
        </>
    );
}