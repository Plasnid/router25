import { useParams } from "react-router";
export default function Project(){
    let params = useParams();
    return (
        <h3>This is project {params.projId}</h3>
    )
}