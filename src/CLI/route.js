const { apresentation } = require("./paths")

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
                await apresentation()
                break;

            case "home page":
                break;

            case "exit":
                break;
        }
    }
}

module.exports = { Route }