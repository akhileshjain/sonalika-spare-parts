import * as actionTypes from './actions';

const initialState = {
    phoneNo: null,
    isLoggedIn: false,
    cart: []
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_NUMBER: {
            return {
                ...state,
                phoneNo: action.phoneNo
            }
        }
        case actionTypes.ADD_ITEM: {
            return {
                ...state,
                cart: state.cart.concat(action.item)
            }
        }
    }
    return state;
}

export default reducer;