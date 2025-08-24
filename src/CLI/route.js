class Route {
    currect_path = "home page"
    list_of_path = [
        "home page",
        "exit",
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
            case "home page":
                break;

            case "exit":
                break;
        }
    }
}

module.exports = { Route }