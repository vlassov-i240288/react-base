import { Icon } from "@material-ui/core";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, CHANGE_NAME } from "../../store/profile/action";
import { selectName } from "../../store/profile/selector";
import "./Profile.css";

export const Profile = () => {
  const [value, setValue] = useState("");
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeName(value));
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <h4>Profile {name}</h4>
      </div>
      <div className="formProfile">
        <input className="inputProfile" type="text" value={value} onChange={handleChange} />
        <button className="saveName" onClick={handleSubmit}>{<Icon>save</Icon>}</button>
      </div>
    </div>
  );
};

export default Profile;

