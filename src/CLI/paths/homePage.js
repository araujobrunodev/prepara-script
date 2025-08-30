const text = require("../text")
const {Route} = require("../route")

async function homePage () {
    console.log("\n======================")
    console.log("   Home page   ")
    console.log("======================\n")
    console.log("Chose option")
    console.log("[ >login ] - put your account to access your lessons")
    console.log("[ >Exit ] - leave software")
    //console.log("[ lessons ] - choose lessons to do it") // only appear after has account
    console.log("\n======================")

    const typed = await text("what do you chose it? ")

    if (typed.isCommand) {
        //go to determinated path
    } else {
        //reload page
    }
}

module.exports = homePage