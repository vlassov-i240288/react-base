import { useCallback } from "react";
import { store } from "../../store/profile/index";
import { EXAMPLE_ACTION } from "../../store/profile/action";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();
  const { showName, name } = useSelector((state) => state);

  const toggleShowName = {
    type: EXAMPLE_ACTION
  };

  const setShowName = useCallback(() => {
    dispatch(toggleShowName);
  }, [dispatch]);

  return (
    <div className="container">
      <h4>Profile</h4>
      <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={setShowName}
      />
      <span>Show Name</span>
      {showName && <div>{name}</div>}
    </div>
  );
}