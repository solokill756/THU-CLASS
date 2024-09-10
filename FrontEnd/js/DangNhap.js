const signInEmail = document.querySelector('#signInEmail');
const signInPassword = document.querySelector('#signInPassword');
const signInPasswordAgain = document.querySelector('#SignInPasswordAgain'); // Đảm bảo tên khớp với ID trong form

console.log(signInPassword);
console.log(signInPasswordAgain);

document.querySelector('.loginPage').addEventListener('click', function() {
    document.querySelector('.login').classList.remove('d-none');
    document.querySelector('.signUp').classList.add('d-none');
});

document.querySelector('.signUpPage').addEventListener('click', function() {
    document.querySelector('.signUp').classList.remove('d-none');
    document.querySelector('.login').classList.add('d-none');
});

signInEmail.addEventListener("change", function(event) {
    console.log(signInEmail.nextElementSibling);
    signInEmail.nextElementSibling.style.display = 'none';
});

signInPassword.addEventListener("change", function(event) {
    signInPassword.nextElementSibling.style.display = 'none';
});

signInPasswordAgain.addEventListener("change", function(event) {
    signInPasswordAgain.nextElementSibling.style.display = 'none';
});

// Gửi yêu cầu Đăng ký tới server
document.getElementById('signUpForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Chặn form submit ngay lập tức

    const formData = new FormData(this);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    if(data["password"].length < 8) {
        signInPassword.nextElementSibling.style.display = "block";
    } 

    // Kiểm tra xem mật khẩu có khớp không
    if (!(data["password"] === signInPasswordAgain.value)) { // Sửa lại biến cho đúng với ID
        document.querySelector('.password_again').style.display = "block";
        return;
    }

    console.log('Data:', data);

    // Gửi request lên server (comment để debug)
    try {
        const response = await fetch('http://localhost:8080/SignUp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        console.log(response.status);
    } catch (error) {
        console.log('Error:', error);
    }
});
