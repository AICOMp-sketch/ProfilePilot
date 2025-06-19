// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Script to handle profile picture preview
    const profilePictureUpload = document.getElementById('profile-picture-upload');
    const profilePicturePreview = document.getElementById('profile-picture-preview');

    if (profilePictureUpload && profilePicturePreview) {
        profilePictureUpload.addEventListener('change', function(event) {
            const reader = new FileReader();
            reader.onload = function() {
                profilePicturePreview.src = reader.result;
            }
            if (event.target.files && event.target.files[0]) {
                reader.readAsDataURL(event.target.files[0]);
            }
        });
    }

    // Example of form submission handling (can be expanded)
    const profileForm = document.querySelector('form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            // You can collect form data here and send it to a server
            console.log('Form submitted!');
            // Example:
            const fullName = document.getElementById('full-name').value;
            const email = document.getElementById('email').value;
            console.log('Full Name:', fullName);
            console.log('Email:', email);
            // Add more logic here for actual data handling (e.g., fetch API call)
            // Display a success message or handle errors
        });
    }
});