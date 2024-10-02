import { useNavigate } from "react-router-dom";
import userQueries from "../../services/userQueries";


function Login() {
    const navigate = useNavigate()

    const handleSubmit= e => {
        e.preventDefault()
        const aux = new FormData(e.target)
        const data = Object.fromEntries(aux.entries())
        userQueries.login(data).then(response => {
            if (response.token) {
                navigate("/events");
            } else {
                alert(response);
            }
        }).catch(error => {
            alert("Error: " + error); 
        });
    }


    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-h2" >Iniciar Sesión</h2>
                <input type="email" name="email" placeholder="Email" className="input-field" />
                <input type="password" name="password" placeholder="Password" className="input-field" />
                <button type="submit" className="login-button">Iniciar</button>
            </form>
        </div>
    );

};




export default Login;