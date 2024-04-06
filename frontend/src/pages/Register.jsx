import Form from "../components/Form"
import "../styles/Login.css"

function Register() {
    return <><>
    <h1 className="login-title">Note's app</h1>
    <Form route="/api/user/register/" method="register" /></>
    </>
}

export default Register