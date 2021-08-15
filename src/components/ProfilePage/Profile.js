import { Icon } from "@material-ui/core";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, CHANGE_NAME } from "../../store/profile/action";
import "./Profile.css";




export default function Profile() {
  const { name } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const toggleShowName = {
    type: CHANGE_NAME
  };

  const setShowName = useCallback(() => {
    dispatch(toggleShowName);
  }, [dispatch]);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const setName = useCallback(() => {
    dispatch(changeName(value));
    setValue("");
  }, [dispatch, value]);

  return (
    <div className="container">
      <div>
        <h4>Profile {name}</h4>
      </div>
      <div className="formProfile">
        <input className="inputProfile" type="text" value={value} onChange={handleChange} />
        <button className="saveName" onClick={setName}>{<Icon>save</Icon>}</button>
      </div>
    </div>
  );
}

