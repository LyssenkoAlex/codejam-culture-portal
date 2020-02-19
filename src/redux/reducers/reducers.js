import {
    SHOW_AUTHOR
} from "../actions/actions";
import authorData from '../../data/data';


const initialState = {
    authors:authorData.authors,
    authorOfTheDay:0,
    selectedAuthor:5
};



function authorsRootReducer(state = initialState, action) {
    console.log('state.authors', state.authors);
    switch (action.type) {
        case SHOW_AUTHOR:
            return {
                authors:state.authors,
                authorOfTheDay:state.authorOfTheDay,
                selectedAuthor:state.selectedAuthor
            };
        default:
            return state;
    }
}

export default authorsRootReducer;
