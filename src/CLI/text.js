const { current_interface } = require("./index")

async function text (value) {
    return new Promise((resolve) => {
        current_interface.question(value, function (answer) {
            resolve(answer)
        })
    })
}

module.exports = text