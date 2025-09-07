const { current_interface } = require("./index")
const filterText = require("./filterText")

/**
 * @function text
 * @param {string} value
 * @returns {Promise<{value: string,isCommand: boolean,command: string}>}
 * ask something and return an object
*/
async function text (value) {
    return new Promise((resolve) => {
        current_interface.question(value, function (answer) {
            resolve(filterText(answer))
        })
    })
}

module.exports = text