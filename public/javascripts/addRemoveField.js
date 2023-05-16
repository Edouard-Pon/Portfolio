function addRemoveField() {
    let form = document.getElementById('projectImagesField')
    let input = document.createElement('input')
    input.type = 'text'
    input.name = 'projectImages'
    input.id = 'projectImages'
    input.value = ''

    form.appendChild(input)
}

function removeLastField() {
    let form = document.getElementById('projectImagesField')
    let fields = form.querySelectorAll('input[id="projectImages"]')

    console.log(fields)

    let lastField = fields[fields.length - 1]

    if (lastField) {
        form.removeChild(lastField)
    }
}
