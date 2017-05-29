/**
 * Created by tania on 29.5.2017 г..
 */
/**
 *
 * @param str {string} (word)
 * @returns {boolean}
 */
function checkPalindrom(str) {
    let len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1])
            return false;
    return true;

}

//console.log(checkPalindrom('racecar'));