import {
    CHANGE_LANGUAGE,
    SHOW_DIRECTOR
} from "../actions/actions";
import directorsData from '../../data/data';
import {LANG} from "../../utils/utils";

const randomDirector = Math.floor(Math.random() * 8);


const initialState = {
  directors:directorsData.directors,
  directorsOfTheDay:0,
  selectedDirector:directorsData.directors.filter((x) => x.id === randomDirector)[0],
  language:LANG.RU.CODE
};



function directorsRootReducer(state = initialState, action) {

  switch (action.type) {
    case SHOW_DIRECTOR:
      return{
        ...state, selectedDirector: state.directors.filter(d => {
          return  d.id === action.id})[0]
      }
    case CHANGE_LANGUAGE :
      return Object.assign({}, state, {language:LANG[action.langCode].CODE});
    default:
      return state;
  }
}

export default directorsRootReducer;
