const askRA = require("../features/askRA")
const askPassword = require("../features/askPassword")

async function login () {
    console.log("\n======================")
    console.log("   login page   ")
    console.log("======================\n")
    
    const ra = askRA()
    const password = askPassword()
}

module.exports = login