//@ts-check
/**
 * Initializes the project (프로젝트를 초기화함)
 * @param {object} config
 * @param {boolean} config.debug 
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
    return true;
}

/**
 * exits the problem
 * @param {number} code 
 * @returns {number}
 */
export function exit(code){
    return code + 1;
}