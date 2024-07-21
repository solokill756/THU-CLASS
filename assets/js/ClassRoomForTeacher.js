document.getElementById('add-date-btn').addEventListener('click', function() {
    const dateContainer = document.getElementById('class-dates');
    const newDateInput = document.createElement('input');
    newDateInput.type = 'date';
    newDateInput.className = 'form-control mb-2';
    newDateInput.name = 'class-dates[]';
    dateContainer.appendChild(newDateInput);
});

document.getElementById('delete-date-btn').addEventListener('click' , function() {
    var parent = document.getElementById('class-dates');
    var children = parent.children;
    console.log(children);
    var lastChildren = children[children.length - 1];
    parent.removeChild(lastChildren);
})