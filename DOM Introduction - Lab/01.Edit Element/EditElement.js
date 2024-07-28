function editElement(inputElement, match, replacer) {

    const element = inputElement.textContent;
    const matcher = new RegExp(match, "g");
    const editedContent = element.replace(matcher, replacer);

    inputElement.textContent = editedContent;
}