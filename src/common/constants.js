export const BASE_URL = 'https://web.accountsdeck.com/ws/spd/';

let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("API_TOKEN", "WTBW7FSRNIJEHSXCA11ZR");

export let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
};