const command_list = [
    ">home_page",
    ">exit",
    ">introduction",
    ">login"
]

async function filterText (rawValue = "") {
    const processed_text = {
        value: rawValue,
        isCommand: false,
        command: ""
    }

    const find_command = command_list.findIndex((command) => rawValue.toLowerCase() == command)

    if (find_command > -1) {
        const start_piece_of_command = (command_list[find_command]).slice(1,(command_list[find_command]).length)
        
        processed_text.command = start_piece_of_command
        processed_text.isCommand = true
    }

    return processed_text
}

module.exports = filterText