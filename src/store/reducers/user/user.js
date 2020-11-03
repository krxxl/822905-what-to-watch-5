import {AuthorizationStatus} from "../../../constant/constant";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  // errorStatus: ErrorStatus.NO_ERROR,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    // case ActionType.SHOW_ERROR:
    //   return Object.assign({}, state, {
    //     errorStatus: action.payload,
    //   });
  }

  return state;
};

export {user};
