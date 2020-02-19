import {
    SHOW_DIRECTOR
} from "../actions/actions";
import directorsData from '../../data/data';


const initialState = {
    directors:directorsData.directors,
    directorsOfTheDay:0,
    selectedDirector:5
};



function directorsRootReducer(state = initialState, action) {
    console.log('state.Directors', state.authors);
    switch (action.type) {
        case SHOW_DIRECTOR:
            return {
                directors:state.directors,
                directorsOfTheDay:state.directorsOfTheDay,
                selectedDirector:state.selectedDirector
            };
        default:
            return state;
    }
}

export default directorsRootReducer;
