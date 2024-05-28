document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-image-form');
    const profileImage = document.getElementById('profile-image');
    const uploadedImage = document.getElementById('uploaded-image');

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const file = profileImage.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                uploadedImage.src = e.target.result;
                uploadedImage.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
});
// JavaScript source code
