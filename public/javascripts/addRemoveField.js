function addField(formId, inputId) {
    let form = document.getElementById(formId)
    let input = document.createElement('input')
    input.type = 'text'
    input.name = inputId
    input.id = inputId
    input.value = ''

    form.appendChild(input)
}

function removeLastField(formId, inputId) {
    let form = document.getElementById(formId);
    let fields = form.querySelectorAll(`input[id="${inputId}"]`);

    let lastField = fields[fields.length - 1];

    if (lastField) {
        form.removeChild(lastField);
    }
}
