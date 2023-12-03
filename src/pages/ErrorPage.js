import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className="page-not-found">

            <div>Oops, an error has occured! <br /> Sorry, but this page does not exist .. No it really does not.</div>
            <div>Here, <Link to="/">come back to reality</Link></div>
        </div>
    )
}

export default ErrorPage;