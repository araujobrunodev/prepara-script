const text = require("../text")

async function askPassword () {
    const passoword = (await text("password: ")).value

    if (passoword.length == 0) {
        return askPassword()
    }

    return passoword
}

module.exports = askPassword