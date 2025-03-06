export function formatTimeStrings(strings) {
    if (strings.length > 1) {
        return `${strings[0]} - ${strings[strings.length - 1]}`
    }

    if (strings.length) {
        return `${strings[0]} - Till tomorrow`
    }

    return `None`;
}