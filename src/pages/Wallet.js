import Header from "../components/header";
import Footer from "../components/footer";
import Accounts from '../components/accounts'
import UserNameEditForm from "../components/userNameEditForm";
import { useSelector } from "react-redux";
import { useState } from "react";

function Wallet() {
    const username = useSelector((state) => state.user.username)
    const [formOpen, setFormOpen] = useState(false);

    const toggleForm = () => {
        setFormOpen((prevstate) => !prevstate);
    }
    const closeForm = () => {
        setFormOpen(false);
    }

    return (
        <div className="walletPage">
            <Header />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back,<br />{username}</h1>
                    <button className="edit-button" onClick={toggleForm}>Edit Name</button>
                    {formOpen ? (
                        <div className="userNameEditForm">
                            <UserNameEditForm closeForm={closeForm} />
                        </div>
                    ) : null}
                </div>
                <Accounts />
            </main>
            <Footer />
        </div>
    )
}

export default Wallet;


/* const authToken = useSelector((state) => state.auth.token); */
/*  const dispatch = useDispatch(); */
/* useEffect(() => {
    dispatch(FetchUserProfil(authToken));
}, [dispatch, authToken]) */