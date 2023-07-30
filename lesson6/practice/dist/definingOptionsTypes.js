"use strict";
// function formatName(options: NameOptions = {}): string {
// let firstName = options.firstName ?? 'John';
// let lastName = options.lastName ?? 'Doe';
// let title = options.title ?? '';
function formatName({ firstName = "John", lastName = "Doe", title }) {
    return `${title ? title + ' ' : ''}${firstName} ${lastName}`;
}
const formattedName = formatName({
    firstName: "Jane",
    lastName: "Smith",
    title: "Dr.",
});
console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe
