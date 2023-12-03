import Header from "../components/header";
import Footer from "../components/footer";
import LoginForm from "../components/loginForm";

function Login() {
    return (
        <div className="loginPage">
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <h1>Sign In</h1>
                    <LoginForm />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Login;
