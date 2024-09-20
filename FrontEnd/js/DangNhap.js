const signInEmail = document.querySelector('#signInEmail');
const signInPassword = document.querySelector('#signInPassword');
const signInPasswordAgain = document.querySelector('#SignInPasswordAgain'); 
const loginPassword = document.querySelector('#loginPassword');
const loginEmail = document.querySelector('#loginEmail');
const loginForm = document.querySelector('#loginForm');



document.querySelector('.loginPage').addEventListener('click', function() {
    document.querySelector('.login').classList.remove('d-none');
    document.querySelector('.signUp').classList.add('d-none');
});

document.querySelector('.signUpPage').addEventListener('click', function() {
    document.querySelector('.signUp').classList.remove('d-none');
    document.querySelector('.login').classList.add('d-none');
});

signInEmail.addEventListener("focus", function(event) {
    console.log(signInEmail.nextElementSibling);
    signInEmail.nextElementSibling.style.display = 'none';
});

signInPassword.addEventListener("focus", function(event) {
    signInPassword.nextElementSibling.style.display = 'none';
});

signInPasswordAgain.addEventListener("focus", function(event) {
    signInPasswordAgain.nextElementSibling.style.display = 'none';
});

loginEmail.addEventListener("focus", function(event) {
    loginPassword.nextElementSibling.style.display = 'none';
})

loginPassword.addEventListener("focus", function(event) {
    loginPassword.nextElementSibling.style.display = 'none';
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

        if(response.ok) {
            const token = response.text();
            localStorage.setItem('token', token);
            window.location.href = '../html/MainPage.html';
        }
    } catch (error) {
        console.log('Error:', error);
    }   
});


// Gửi yêu cầu đăng nhập tới Server 

loginForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Chặn form submit ngay lập tức

    const formData = new FormData(this);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);
    // Gửi request lên server (comment để debug)
    try {
        const response = await fetch('http://localhost:8080/Login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if(response.ok) {
            const token = response.text();
            localStorage.setItem('token', token);
            console.log('token', token);
            // window.location.href = '../html/MainPage.html';
        }
        else {
            console.error('Invalid response from server');
            loginPassword.nextElementSibling.style.display  = 'block';
        }
    } catch (error) {
        console.log('Error:', error);
    }   
});
