export const SAVE_NUMBER = 'SAVE_NUMBER';
export const STORE_NUMBER = 'STORE_NUMBER';
export const VERIFY_OTP = 'VERIFY_OTP';

export const storeNumber = (phoneNumber) => {
    return {
        type: STORE_NUMBER,
        phoneNo: phoneNumber
    };
}


export const saveNumber = (phoneNumber) => {
    return dispatch => {
        let url = 'https://jsonplaceholder.typicode.com/posts&' + phoneNumber;
        console.log(url);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                return res.json();
            }).then(responseData => {
                dispatch(storeNumber(phoneNumber));
            });
    }
};