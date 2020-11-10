export const SAVE_NUMBER = 'SAVE_NUMBER';
export const STORE_NUMBER = 'STORE_NUMBER';
export const VERIFY_OTP = 'VERIFY_OTP';
export const ADD_ITEM = 'ADD_ITEM';

export const storeNumber = (phoneNumber) => {
    return {
        type: STORE_NUMBER,
        phoneNo: phoneNumber
    };
}

export const AddItemToCart = (addedItem) => {
    return {
        type: ADD_ITEM,
        item: addedItem 
    }
}

export const saveNumber = (phoneNumber) => {
    return dispatch => {
        // let url = 'https://jsonplaceholder.typicode.com/posts&' + phoneNumber;
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                return res.json();
            }).then(responseData => {
                dispatch(storeNumber(phoneNumber));
            });
    }
};
