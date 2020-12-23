import { GET_COUNTRY } from '../actionTypes';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_COUNTRY:
            return action.payload;
        default:
            return state;
    }
}
