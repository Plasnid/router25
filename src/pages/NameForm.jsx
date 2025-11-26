import { useState } from "react";
import { useNavigate } from "react-router";
export default function NameForm(props){

    const navigate = useNavigate();

    const [namer, setNamer] = useState('');
    const [salutation, setSalutation] = useState('');
    const handleNameChange = (e) => {
        console.log(e.target.value);
        setNamer(e.target.value);
    }
    const handleSalutationChange = (e) => {
        console.log(e.target.value);
        setSalutation(e.target.value);
    }

    function goToThanks(e){
        e.preventDefault();
        console.log("Thank you user!");
        navigate('/team/thanks',{ state: { formSalut: salutation, formName: namer}});
    }
    return (
        <form onSubmit={goToThanks}>
            <section>
                <label>Salutation:
                    <input type="text" onChange={handleSalutationChange}/>
                </label>
                <label>Name:
                    <input type="text" onChange={handleNameChange}/>
                </label>
            </section>
            <input type="submit" value="Submit" />
        </form>
    )
}