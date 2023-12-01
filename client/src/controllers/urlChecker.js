export function checkAuthUrl () {
    //get the current url
    const url = window.location.search;
    //get query parameters
    const queryParams = new URLSearchParams(url);
    //check if the auth url has plans in the query dict
    if (queryParams.has("plan")) {
        return true;
    }
    return false
}
