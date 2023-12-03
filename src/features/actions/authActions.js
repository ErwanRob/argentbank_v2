import { loginSucess, logout } from "../reducers/authReducer";

export const loginUser = (credentials) => async (dispatch) => {
    try {
        //API CALL
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            console.log("User Not found")
        } else {
            const data = await response.json();
            const authToken = data.body.token;
            dispatch(loginSucess({ token: authToken }));
            localStorage.setItem('authToken', authToken);
            console.log("Authentification sucess !");
        }
    }
    catch (error) {
        console.error('Error during login', error)
    }
};

export const logoutUser = () => (dispatch) => {
    dispatch(logout())
}


//POST 'http://localhost:3001/api/v1/user/profile'
//PUT 'http://localhost:3001/api/v1/user/profile'

