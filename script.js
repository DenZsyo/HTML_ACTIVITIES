function validateForm() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("What the Sigma? all fields are required. Please fill out all the fields.");
        return false; // Prevent form submission
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false; // Prevent form submission
    }

    alert("Registration successful!");
    return true; // Allow form submission
}
