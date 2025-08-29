const command_list = [
    ">home_page",
    ">exit",
    ">introduction"
]

async function filterText (rawValue = "") {
    const processed_text = {
        value: rawValue,
        isCommand: false
    }

    const find_command = command_list.findIndex((command) => rawValue.search(command) > -1)

    if (find_command > -1) processed_text.isCommand = true;

    return processed_text
}

module.exports = filterText