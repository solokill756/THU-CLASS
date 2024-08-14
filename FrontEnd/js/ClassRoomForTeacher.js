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