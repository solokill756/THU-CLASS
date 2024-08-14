
const editBtn = document.querySelector('.edit_btn');
const addBtn = document.querySelector('.add_btn');
// Tắt hết nút xóa và sửa 

document.querySelectorAll('.shedule_item').forEach((sheduleItem) => {
    sheduleItem.querySelectorAll('i').forEach((item) => {
        item.classList.add('d-none');
    }
    )
})

editBtn.addEventListener('click' , (e) => {
    if(editBtn.querySelector('.fa-pen-to-square')) {
        document.querySelectorAll('.shedule_item').forEach((sheduleItem) => {
            sheduleItem.querySelectorAll('i').forEach((item) => {
                console.log(item);
                item.classList.remove('d-none');
            }
            )  
        })
        editBtn.innerHTML = 'Lưu <i class="fa-regular fa-bookmark"></i>';
        addBtn.innerHTML = '<i class="fa-solid fa-xmark fs-6"></i> Hủy';
        
    }
    else {
        document.querySelectorAll('.shedule_item').forEach((sheduleItem) => {
            sheduleItem.querySelectorAll('i').forEach((item) => {
                console.log(item);
                item.classList.add('d-none');
            }
            )  
        })
        editBtn.innerHTML = 'Chỉnh Sửa <i class="fa-solid fa-pen-to-square"></i>';
        addBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Thêm Mới';
        
        
    }
})
addBtn.addEventListener('click', () => {
    if(returnBtn. querySelector('.fa-xmark')) {
        document.querySelectorAll('.shedule_item').forEach((sheduleItem) => {
            sheduleItem.querySelectorAll('i').forEach((item) => {
                console.log(item);
                item.classList.add('d-none');
            }
            )  
        })
        editBtn.innerHTML = 'Chỉnh Sửa <i class="fa-solid fa-pen-to-square"></i>';
        addBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Thêm Mới';
        
    }
    else {
        console.log(
            'Đã quay lại thành công'
        )
    }
})

document.getElementById('add-date-btn').addEventListener('click', function() {
    const classDates = document.getElementById('class-dates');
    const newDateInput = document.createElement('div');
    newDateInput.className = 'mb-2 row';
    newDateInput.innerHTML = `
        <div class="col-md-6">
            <select class="form-control" name="class-day[]">
                <option value="Monday">Thứ Hai</option>
                <option value="Tuesday">Thứ Ba</option>
                <option value="Wednesday">Thứ Tư</option>
                <option value="Thursday">Thứ Năm</option>
                <option value="Friday">Thứ Sáu</option>
                <option value="Saturday">Thứ Bảy</option>
                <option value="Sunday">Chủ Nhật</option>
            </select>
        </div>
        <div class="col-md-6">
            <input type="time" class="form-control" name="class-time[]">
        </div>
    `;
    classDates.appendChild(newDateInput);
});

document.getElementById('delete-date-btn').addEventListener('click', function() {
    const classDates = document.getElementById('class-dates');
    if (classDates.children.length > 1) {
        classDates.removeChild(classDates.lastChild);
    }
});
