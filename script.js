
      function sendEmail(){
        Email.send({
    Host : "smtp.gmail.com",
    Username : "engella22@gmail.com",
    Password : "imelar2015",
    To : 'engella22@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
      }
        
  
// نافذة تسجيل الدخول
function openLoginModal() {
  document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
}

// نافذة تسجيل جديد
function openRegisterModal() {
  document.getElementById('registerModal').style.display = 'block';
}

function closeRegisterModal() {
  document.getElementById('registerModal').style.display = 'none';
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  document.getElementById('rememberMe').checked = false;
}

function login() {
  
  alert('تم تسجيل الدخول!');
  closeLoginModal();
}

function register() {
  
  alert('تم')}

