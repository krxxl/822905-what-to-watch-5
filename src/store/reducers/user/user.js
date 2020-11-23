import {AuthorizationStatus} from "../../../constant/constant";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userImg: ``,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.CHANGE_USER_IMG:
      return Object.assign({}, state, {
        userImg: action.payload,
      });
  }

  return state;
};

export {user};
