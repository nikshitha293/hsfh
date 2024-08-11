// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
    // Remove the 'active' class from the navbar on scroll 
    navbar.classList.remove('active');
});

menu.onclick = () => {
    navbar.classList.toggle('active');
};

// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
};

// Initialize EmailJS
(function () {
    emailjs.init("QviDrXrwOnzj3Lf4j");
})();

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
  
    if (!validateEmail(params.email)) {
        var errorPopup = document.getElementById("errorPopup");
        errorPopup.classList.add("show");
        setTimeout(() => {
            errorPopup.classList.remove("show");
        }, 3000);
        return;
    }
  
    const serviceID = "service_xvjgevj";
    const templateID = "template_h5ur1vp";
  
    emailjs.send(serviceID, templateID, params)
    .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
  
        // Show the success popup
        var popup = document.getElementById("popup");
        popup.classList.add("show");
  
        // Hide the popup after 3 seconds
        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);
  
    })
    .catch(err => console.log(err));
}
