import "./AuthPage.scss";
import Register from "../../components/Register/Register";
import Login from "../../components/Login/Login";

export default function AuthPage() {
    return (
        <section className="auth">
            <div className="auth__register">
                <Register />
            </div>
            <div className="auth__login">
                <Login />
            </div>
        </section>
    )
}