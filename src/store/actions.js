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
        let url = 'https://web.accountsdeck.com/supplier/otp?mobileNo=' + phoneNumber;
        // let url = 'https://web.accountsdeck.com/ws/acc_stmt?from=01/04/2020&to=31/03/2022&led=13722';
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("API_TOKEN", "WTBW7FSRNIJEHSXCA11ZR");
        // myHeaders.append("Accept", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");

        var requestOptions = {
            method: 'POST',
            // 'mode': 'no-cors',
            headers: myHeaders,
            redirect: 'follow'
          };
        //   fetch(url, requestOptions)
        //   .then(response => response.text())
        //   .then(result => console.log(result))
        //   .catch(error => console.log('error', error));

        fetch(url, requestOptions).then(res => {
                return res.json();
            }).then(responseData => {
                dispatch(storeNumber(phoneNumber));
            }).catch(err => {
                debugger;
                console.log(err);
            });
    }
};
