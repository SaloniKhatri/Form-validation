
let submit = document.getElementById('submitBtn');
let isValid = true;

submit.addEventListener('click', () => {
    let userName = (document.getElementById('name').value);
    isValid = true; // all fields are valid...

    if (userName === '') {
        alert("Please enter your name first");
        isValid = false; //isValid is set to false to indicate that the form is not valid and should not proceed further 
                         // (e.g., submission or further processing).
    }


    let userAge = (document.getElementById('age').value);
    isValid = true;

    if (userAge === ''){
        alert("Please enter your age first");
        isValid = false;

    }
    let Email = (document.getElementById('email').value);
    isValid = true;

    if (Email === ''){
        alert("Please enter your email first");
        isValid = false;

    }

    let Password = (document.getElementById('password').value);
    if(Password === ''){
        alert("Please enter your password first");
        if (password.length < 8) {
            alert("Password must be at least 8 characters long!")
            isValid = false;
          }
    }
   
    let Confirm = (document.getElementById('confirmPassword').value);

    if(Confirm === ''){
        alert("Please confirm your password first");
    }else if (Confirm !== Password) {
        alert("Password is not matching!")
        isValid = false;
      }



    // if (isValid) {
    //     alert('Form submitted successfully!');
    // }


});





