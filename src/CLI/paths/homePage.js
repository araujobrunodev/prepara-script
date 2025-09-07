const text = require("../text")

async function homePage (redirect) {
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
        await redirect.to(typed.command)
    } else {
        await homePage()
    }
}

module.exports = homePage