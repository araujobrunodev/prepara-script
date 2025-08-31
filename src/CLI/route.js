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

    async filter (path = "") {
        switch (path) {
            case "introduction":
                return await apresentation()
                break;

            case "home page":
                return await homePage()
                break;

            case "exit":
                return exit()
                break;
        }
    }
}

module.exports = { Route }