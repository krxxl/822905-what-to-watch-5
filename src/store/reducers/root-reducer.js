import {combineReducers} from "redux";
import {filmsProcess} from "./process/process";
import {filmsData} from "./data/data";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  SHOW: `SHOW`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.SHOW]: filmsProcess,
  [NameSpace.USER]: user,
});
