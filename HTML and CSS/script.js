document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input[type='text'], select");
    const submitButton = document.querySelector("button[type='submit']");
    const form = document.getElementById("registrationForm");

    // Input field focus animation
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.style.borderColor = "#007bff"; // Change border color on focus
            input.style.transform = "scale(1.05)"; // Slightly scale up
            input.style.transition = "all 0.3s ease"; // Smooth transition
        });

        input.addEventListener("blur", () => {
            input.style.borderColor = "#ccc"; // Reset border color on blur
            input.style.transform = "scale(1)"; // Reset scale
        });
    });

    // Form submission animation
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        submitButton.innerHTML = "Submitting..."; // Change button text

        // Fade out effect
        form.style.opacity = 0; // Start fade out
        form.style.transition = "opacity 0.5s ease"; // Smooth transition

        setTimeout(() => {
            alert("Form submitted successfully!");
            form.reset(); // Reset the form after submission
            form.style.opacity = 1; // Reset opacity for next submission
            submitButton.innerHTML = "Submit"; // Reset button text
        }, 500); // Duration of the fade-out effect
    });
});