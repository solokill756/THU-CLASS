document.getElementById('checkPasswordButton').addEventListener('click', function () {
    const passwordInput = document.getElementById('passwordInput');
    const password = passwordInput.value;
    const correctPassword = 'yourpassword'; // Thay thế bằng mật khẩu thực tế
    if (password === correctPassword) {
        document.getElementById('passwordFeedback').style.display = 'none';
        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.add('is-valid');
        // Kích hoạt liên kết tải xuống ẩn
        document.getElementById('hiddenDownloadLink').click();

        // Đóng modal
        const passwordModal = bootstrap.Modal.getInstance(document.getElementById('passwordModal'));
        passwordModal.hide();
    } else {
        passwordInput.classList.remove('is-valid');
        passwordInput.classList.add('is-invalid');
        document.getElementById('passwordFeedback').style.display = 'block';
    }
});


document.querySelector(".dowloadFile").addEventListener('click' , function() {
    const passwordInput = document.getElementById('passwordInput');
    document.getElementById('passwordFeedback').style.display = 'none';
    document.getElementById('passwordInput').value = "";
    passwordInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-valid');
})