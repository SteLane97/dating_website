const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {/*adds event listener*/
    $("#register_form").addEventListener("submit", evt => {
        /*retreive password values*/
        const password = $("#password").value;
        const confirmPassword = $("#confirm_password").value;
        
        if (password != confirmPassword) {
            alert("Passwords must match.");
            evt.preventDefault(); /*if passwords don't match, prevents button from working*/
        }
    });
});