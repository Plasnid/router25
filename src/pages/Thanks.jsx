import { useLocation } from "react-router"
export default function Thanks(){
    const formDat = useLocation();
    const data = formDat.state;
    return (
        <section>
            <h2>Thanks so much {data.formSalut} {data.formName}!</h2>
            <p>You are awesome </p>
        </section>
    )
}