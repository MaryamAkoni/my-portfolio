document.addEventListener("DOMContentLoaded", function() {
//form
    const form = document.getElementById('contact-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        nameError.style.display = 'none';
        emailError.style.display = 'none';
        messageError.style.display = 'none';

        let valid = true;

        if (nameField.value.trim() === '') {
            nameError.textContent = 'Please enter a valid name';
            nameError.style.display = 'block';
            valid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailField.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
            valid = false;
        }

        if (messageField.value.trim() === '') {
            messageError.textContent = 'Please enter your message';
            messageError.style.display = 'block';
            valid = false;
        }

        if (valid) {
            console.log('Form submitted');
            alert("Form submitted successfully!");
        }
    });
});


//details button

const detailsBtn = document.getElementById('details-btn');
const projectDetails = document.getElementById('project-details');

detailsBtn.addEventListener('click', function() {
    if (projectDetails.style.display === 'none') {
        projectDetails.style.display = 'block';
        detailsBtn.textContent = 'Hide Details'; 
    } else {
        projectDetails.style.display = 'none';
        detailsBtn.textContent = 'Show Details'; 
    }

});


//location

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, handleError);
    } else {
        document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function displayLocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById("location").innerHTML = `Latitude: ${lat}°<br>Longitude: ${lon}°`;
}

document.getElementById("getLocationBtn").addEventListener("click", getLocation);


const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        projects.forEach(project => {
            if (project.getAttribute('data-category') === category || category === 'all') {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

