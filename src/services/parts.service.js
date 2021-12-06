import * as Constants from '../common/constants';

export const getParts = async () => {
    const response = await fetch(Constants.BASE_URL + 'itemList_off?page=0&offset=20', Constants.requestOptions);
    const json = await response.json();
    return json;
}
export const getPartsByPage = async (pageNo) => {
    const response = await fetch(Constants.BASE_URL + `itemList_off?page=${pageNo}&offset=20`, Constants.requestOptions);
    const json = await response.json();
    return json;
}
export const getSearchResults = async (searchTerm) => {
    const response = await fetch(Constants.BASE_URL + `itemList_search?str=${searchTerm}`, Constants.requestOptions);
    const json = await response.json();
    return json;
}

export const getPartsCount = async () => {
    const response = await fetch(Constants.BASE_URL + 'itemList_count', Constants.requestOptions);
    const json = await response.json();
    return json;
}
