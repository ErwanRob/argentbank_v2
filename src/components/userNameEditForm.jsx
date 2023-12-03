import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UpdateUserProfil } from "../features/actions/userActions";

function UserNameEditForm({ closeForm }) {
  const authToken = useSelector((state) => state.auth.token);
  const [username, setUsername] = useState(
    useSelector((state) => state.user.username)
  );
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSave = () => {
    dispatch(UpdateUserProfil(username, authToken));
    closeForm();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
    }
  };

  const handleCancel = (e) => {
    closeForm();
  };

  return (
    <form>
      <div className="input-wrapper-edit">
        <label htmlFor="username">User name</label>
        <input
          type="text"
          className="user-info_input"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="input-wrapper-edit">
        <label htmlFor="firstname">First name</label>
        <input
          readOnly
          type="text"
          className="user-info_input --gray"
          id="firstname"
          value={firstname}
        />
      </div>
      <div className="input-wrapper-edit">
        <label htmlFor="lastname">Last name</label>
        <input
          readOnly
          type="text"
          className="user-info_input --gray"
          id="lastname"
          value={lastname}
        />
      </div>
      <div className="button-wrapper">
        <button type="button" className="saveEdit-button" onClick={handleSave}>
          Save
        </button>
        <button
          type="button"
          className="cancelEdit-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UserNameEditForm;
