document.getElementById('updateTaskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = parseInt(document.getElementById('id').value);
    const title = document.getElementById('title').value;
    const state = document.getElementById('state').value;
    const description = document.getElementById('description').value;
    const creationDate = document.getElementById('creationDate').value;
    const limitDate = document.getElementById('limitDate').value;
    const tagIds = document.getElementById('tagIds').value.split(',').map(id => parseInt(id.trim()));

    const data = {
        title,
        state,
        description,
        creationDate: creationDate ? new Date(creationDate).toISOString() : null,
        limitDate: limitDate ? new Date(limitDate).toISOString() : null,
        tagIds
    };

    fetch(`http://localhost:8081/tasks/update/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('result').innerText = 'Tarea actualizada exitosamente: ' + JSON.stringify(result, null, 2);
    })
    .catch(error => {
        document.getElementById('result').innerText = 'Error actualizando la tarea: ' + error.message;
    });
});