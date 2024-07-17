document.getElementById('fileInput').addEventListener('change', function(event) {

    var output = document.getElementById('output');

    output.src = URL.createObjectURL(event.target.files[0]);

    output.style.display = 'block'; // Hiển thị ảnh sau khi chọn

});


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible message " role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    
    appendAlert('Thay đổi thông tin thành công !', 'success')
    window.scrollTo({

        top: 0,

        behavior: 'smooth' // Cuộn mượt

    });
    setTimeout(function() {
        document.querySelectorAll('.message').forEach(function(message) {
            message.style.display = 'none';
        })
    }, 1000);
  })
}

