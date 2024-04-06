import Form from "../components/Form"
import "../styles/Login.css"

function Login() {
    return <><>
        <h1 className="login-title">Note's app</h1>
        <Form route="/api/token/" method="login" /></>
    </>
}

export default Login