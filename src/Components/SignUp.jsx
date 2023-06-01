import React, { useState, useEffect } from 'react';
import './SignUp.css';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSuccessAlertShown, setIsSuccessAlertShown] = useState(false);
  const [isErrorAlertShown, setIsErrorAlertShown] = useState(false);

  useEffect(() => {
    // Remove emptyField class after 3 seconds
    if (isFormSubmitted) {
      const timeout = setTimeout(() => {
        setIsFormSubmitted(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isFormSubmitted]);

  function handleSubmit(event) {
    event.preventDefault();

    // Check if all fields are filled
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      phone.trim() === '' ||
      dateOfBirth.trim() === ''
    ) {
      setIsFormSubmitted(true);

      setIsErrorAlertShown(true);
      // Hide error alert after 3 seconds
      setTimeout(() => {
        setIsErrorAlertShown(false);
      }, 3000);

      alert('Please fill in all fields');
      return;
    }

    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setDateOfBirth('');
    setIsFormSubmitted(false);
    setIsSuccessAlertShown(true);

    // Hide success alert after 3 seconds
    setTimeout(() => {
      setIsSuccessAlertShown(false);
    }, 3000);

    // Show success message or perform further actions
    alert('Registration completed successfully! Please check your registration email for email verification');
  }
  

  return (
    <div className="signUpContainer">
      <div className="leftSection">
        <img className="imageSignIn" src="tomorrowland.jpg" alt="Signup" />
        <h2>Sign in</h2>
      </div>
      <div className="rightSection">
      <h3>Create an account</h3>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="firstName">First Name</label>
            <input
              className={isFormSubmitted && firstName.trim() === '' ? 'emptyField' : ''}
              type="text"
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
             
              required
              
              
            />
          </div>
          <div className="formGroup">
            <label htmlFor="lastName">Last Name</label>
            <input
              className={isFormSubmitted && lastName.trim() === '' ? 'emptyField' : ''}
              type="text"
              id="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
              
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              className={isFormSubmitted && email.trim() === '' ? 'emptyField' : ''}
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="phone">Phone Number</label>
            <input
               className={isFormSubmitted && phone.trim() === '' ? 'emptyField' : ''}
              type="tel"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              className={isFormSubmitted && dateOfBirth.trim() === '' ? 'emptyField' : ''}
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(event) => setDateOfBirth(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit"   onClick={handleSubmit}>Sign In</button>
        </form>
      </div>
    </div>
  );
  
}

export default SignUp;


// import React, { useState } from 'react';
// import './SignUp.css';

// const SignUp = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');

//   const areAllFieldsFilled = () => {
//     return firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && phoneNumber.trim() !== '' && dateOfBirth.trim() !== '';
//   };

//   const addRedBorderToEmptyFields = () => {
//     if (firstName.trim() === '') {
//       document.getElementById('firstName').style.border = '2px solid red';
//     }
//     if (lastName.trim() === '') {
//       document.getElementById('lastName').style.border = '2px solid red';
//     }
//     if (email.trim() === '') {
//       document.getElementById('email').style.border = '2px solid red';
//     }
//     if (phoneNumber.trim() === '') {
//       document.getElementById('phoneNumber').style.border = '2px solid red';
//     }
//     if (dateOfBirth.trim() === '') {
//       document.getElementById('dateOfBirth').style.border = '2px solid red';
//     }
//   };

//   const removeRedBordersFromFields = () => {
//     document.getElementById('firstName').style.border = '';
//     document.getElementById('lastName').style.border = '';
//     document.getElementById('email').style.border = '';
//     document.getElementById('phoneNumber').style.border = '';
//     document.getElementById('dateOfBirth').style.border = '';
//   };

//   const showAlert = (message) => {
//     alert(message);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!areAllFieldsFilled()) {
//       addRedBorderToEmptyFields();
//       showAlert('Please fill in all fields.');
//     } else {
//       removeRedBordersFromFields();
//       showAlert('Registration completed successfully! Please check your registration email for email verification.');

//       // Perform form submission logic here
//       // Reset the form fields
//       setFirstName('');
//       setLastName('');
//       setEmail('');
//       setPhoneNumber('');
//       setDateOfBirth('');
//     }
//   };

//   return (
//     <div className="signUpContainer">
//       <div className="leftSection">
//         <img className="imageSignIn" src="tomorrowland.jpg" alt="Signup" />
//         <h2>Sign in</h2>
//       </div>
//       <div className="rightSection">
//         <h3>Create an account</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="formGroup">
//             <label htmlFor="firstName">First Name:</label>
//             <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//           </div>
//           <div className="formGroup">
//             <label htmlFor="lastName">Last Name:</label>
//             <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//           </div>
//           <div className="formGroup">
//             <label htmlFor="email">Email Address:</label>
//             <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           </div>
//           <div className="formGroup">
//             <label htmlFor="phoneNumber">Phone Number:</label>
//             <input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
//           </div>
//           <div className="formGroup">
//             <label htmlFor="dateOfBirth">Date of Birth:</label>
//             <input type="date" id="dateOfBirth" name="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
//           </div>
//           <button className="submit" type="submit">
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

