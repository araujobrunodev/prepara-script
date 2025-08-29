const { current_interface } = require("./index")
const filterText = require("./filterText")

async function text (value) {
    return new Promise((resolve) => {
        current_interface.question(value, function (answer) {
            resolve(filterText(answer))
        })
    })
}

module.exports = text