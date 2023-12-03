import { eraseUserStateOnLogout, modifyUserName, retrieveUser } from "../reducers/userReducer";

export const FetchUserProfil = (authToken) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
        });
        if (!response.ok) {
            console.log("Failed to retrieve User details")
            console.log(response)
        } else {
            const data = await response.json();
            const { userName, firstName, lastName } = data.body;
            dispatch(retrieveUser({ userName, firstName, lastName }))
            /*   localStorage.setItem('userName', userName) */
            console.log("User details retrieved successfully")
        }

    }
    catch (error) {
        console.error('Error trying to get userProfil', error)
    }
}

export const UpdateUserProfil = (username, authToken) => async (dispatch) => {
    try {
        const userData = {
            userName: username,
            // i can add other fields here if needed
        };
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            console.log("Error while trying to update UserName")
        } else {
            const data = await response.json();
            const updatedUserName = data.body.userName;
            dispatch(modifyUserName({ userName: updatedUserName }))
            /*  localStorage.setItem('userName', updatedUserName) */
            console.log("Username Changed Sucessfully to :", updatedUserName)
        }
    }
    catch (error) {
        console.error('Error trying to Modify UserName', error)
    }
}

export const resetSession = () => (dispatch) => {
    dispatch(eraseUserStateOnLogout())
}
