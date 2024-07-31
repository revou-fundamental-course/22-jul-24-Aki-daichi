// Form Validation
function formValidation() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let interest = document.getElementById('interest').value.trim();

    // Name validation
    if (name === '') {
        alert('Please enter your name');
        return false;
    }

    // Email validation
    if (email === '') {
        alert('Please enter your email');
        return false;
    }

    // Email format validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Interest validation
    if (interest === '') {
        alert('Please enter your interest');
        return false;
    }

    // If all validations pass
    alert('Form submitted successfully');

    console.log(name);
    console.log(email);
    console.log(interest);
    return true;
}

// Slideshow
let currentIndex = 0;

function showNextReview() {
    const reviews = document.querySelectorAll('.review');
    currentIndex = (currentIndex + 1) % reviews.length;
    const offset = currentIndex * reviews[0].offsetWidth;
    document.querySelector('.review-container').scrollTo({
        left: offset,
        behavior: 'smooth'
    });
}

setInterval(showNextReview, 5000);
