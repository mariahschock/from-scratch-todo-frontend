// import functions and grab DOM elements
import { signUpUser } from './fetch-utils.js';

const signUpForm = document.getElementById('sign-up');
// let state
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    await signUpUser({ 
        email: formData.get('email'),
        password: formData.get('password'),
        firstName: formData.get('first-name'),
        lastName: formData.get('last-name'),
    });
  
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
// redirectIfLoggedIn();