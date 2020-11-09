import * as actionTypes from './actions';

const initialState = {
    phoneNo: null
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_NUMBER: {
            return {
                ...state,
                phoneNo: action.phoneNo
            }
        }
    }
    return state;
}

export default reducer;