const {createInterface} = require("readline")

const current_interface = createInterface({
    input: process.stdin,
    output: process.stdout,
})

module.exports = {current_interface}