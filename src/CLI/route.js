const { apresentation, homePage, exit } = require("./paths")

class Route {
    currect_path = "introduction"
    list_of_path = [
        "home page",
        "exit",
        "introduction"
    ]

    constructor (redirect) {
        const exist_path = this.list_of_path.findIndex(path => path == redirect)

        if (exist_path > -1) {
            this.currect_path = redirect

            this.filter(this.currect_path)
        }
    }

    async to (path = "") {
        switch (path) {
            case "introduction":
                this.currect_path = "introduction"
                await apresentation()
                return await homePage(this)
                break;

            case "home page":
                this.currect_path = "home page"
                return await homePage(this)
                break;

            case "exit":
                this.currect_path = "exit"
                return exit()
                break;
        }
    }
}

module.exports = { Route }