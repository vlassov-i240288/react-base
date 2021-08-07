import { EXAMPLE_ACTION } from "../../store/profile/action";

const initialState = {
  showName: true,
  name: 'My name'
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION: {
      return {
        ...state,
        showName: !state.showName
      };
    }

    default:
      return state
  }
}