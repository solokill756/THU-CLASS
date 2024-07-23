const students = document.querySelectorAll('.student');

students.forEach((student) => {
    student.addEventListener('click' , function() {
        if(student.classList.contains('selected')) {
            student.classList.remove('selected');
        }
        else {
            student.classList.add('selected');
        }
    })
})

document.querySelector('#btn_themhs').addEventListener('click' , function() {
    students.forEach((student) => {
        if(student.classList.contains('selected')) student.classList.remove('selected');
    })
})