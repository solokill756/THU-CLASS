const ListCourse = document.querySelector('.list_course');
const tuition = document.querySelector('.tuition');
const listDay = document.querySelector('.listDay');
// Đẩy dữ liệu lấy từ API
fetch('http://localhost:8080/class/allClasses')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Chuyển đổi phản hồi thành JSON
  })
  .then(data => {
     // Xử lý dữ liệu JSON nhận được
     console.log(data);
     const coursesHTML = data.map((value) => 
        `<div class="col-md-4" style="width: 20rem;">
                            <div class="card">
                                <img src="${value.classPhoto}" class="card-img-top img-fluid ${value.id}" alt="..." style="cursor: pointer;">
                                <div class="card-body">
                                  <h5 class="card-title" style="color: #EB5B00;">${value.name}</h5>
                                  <p class="card-text text-secondary-emphasis">${value.introduce}</p>
                                  <button data-id = "${value.id}" class="mt-1 button_css fw-bold  btn_register" type="button" data-bs-toggle="modal" data-bs-target="#scheduleTable">Đăng ký</button>
                                </div>
                            </div>
          </div>`
    ).join('');
    //  console.log(coursesHTML);
     ListCourse.innerHTML = coursesHTML;
     const btnRegisters = document.querySelectorAll('.btn_register'); 
      console.log(btnRegisters);
      btnRegisters.forEach((btn) => {
          btn.addEventListener('click' , (event) => {
            tuition.textContent = '';
            listDay.innerHTML = '';
            const btnId = event.target.dataset.id;
            console.log(btnId);
            const courseData = data.find(item => item.id == btnId);
            if(courseData) {
              tuition.textContent = `${courseData.tuition} nghìn đồng`
              courseData.schedules.forEach((item) => {
                  listDay.innerHTML += `<div class="row">
                                      <p class="text-black fw-bolder">${item.day} : ${item.time}</p>
                                  </div>`
              })
            }
            
          })
      })
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

