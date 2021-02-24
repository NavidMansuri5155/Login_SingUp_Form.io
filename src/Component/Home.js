import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Home.css"

function Home() {

    const history = useHistory();

    function HendLogin() {
        history.push("/login")
    }

    function HendSingUp() {
        history.push("/singup")
    }

    return (
        <div>
        <h1>WEL-COME</h1>
        <h2> to our community</h2>
        <button style={{marginLeft:"30%", marginTop:"10%", letterSpacing:"4px"}} onClick={HendLogin} type="button" class="btn btn-primary">Login</button>
        <button style={{marginLeft:"30%", marginTop:"10%", letterSpacing:"4px"}} onClick={HendSingUp} type="button" class="btn btn-primary">singUp</button>

        </div>
    )
}
export default Home;