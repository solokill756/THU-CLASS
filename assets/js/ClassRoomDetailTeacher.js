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

document.querySelectorAll('.btnNop').forEach((btn) => {
    btn.addEventListener('click' , function(){
        if(btn.classList.contains('btn-danger')) {
            btn.classList.remove('btn-danger');
            btn.classList.add('btn-success');
            btn.textContent = 'Đã nộp';
            
        }
        else {
            btn.classList.remove('btn-success');
            btn.classList.add('btn-danger');
            btn.textContent = 'Chưa nộp';
        }
        const trElement = btn.closest('tr');
        if (trElement) {
            var check = false;
            trElement.querySelectorAll('.btnNop').forEach((element) => {
                if(element.classList.contains('btn-danger')) {
                    check = true;
                }
            })
            if(check) {
                trElement.querySelector('.status').classList.remove('text-success');
                trElement.querySelector('.status').classList.add('text-danger');
                trElement.querySelector('.status').textContent = 'UNFINISHED';
            }
            else {
                trElement.querySelector('.status').classList.add('text-success');
                trElement.querySelector('.status').classList.remove('text-danger');
                trElement.querySelector('.status').textContent = 'COMPLETE';
            }
        }
    })
})

document.querySelectorAll('.fa-ban').forEach((btn_ban) => {
    btn_ban.addEventListener('click' , function(){
        const colDiv = btn_ban.closest('.col-md.my-3');
        colDiv.classList.add('d-none');
    })
})