//Set cookie function
/**
 * setCookie - sets cookie
 * @param {string} cookieName - name of the cookie set eg userName
 * @param {string} cookieValue - value of the cookie set eg Jack watua
 * @param {number} minutes - duration in minutes for cookies expiration
 *
 * Return: no return value
 */
function setCookie(cookieName, cookieValue, minutes) {
    var d = new Date();
    d.setTime(d.getTime() + (minutes*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + expires;
}




/**
 * getCookie - gets the value of cookie stored
 * @param {*} key - key that needs to be accessed eg 'userName'
 * @returns : null if the cookie is not found else return
 */

function getCookie(key) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf(key + "=") === 0) {
      return cookie.substring(key.length + 1, cookie.length);
    }
  }
  return null;
}


export {
    getCookie,
    setCookie
}
