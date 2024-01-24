// RegistrationForm.js
import React, { useState } from 'react';
import formConfig from './formConfig';
import { registerCustomer } from '../services/api';

  const RegistrationForm = ({ onRegistrationSuccess }) => {
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    values.status = true
   
    // Assuming status is always a boolean

  
    // Validate field values
    const validationErrors = {};
  
    formConfig.fields.forEach((field) => {
      const { name, regex, required } = field;
      const value = values[name];
  
      if (required && !value) {
        validationErrors[name] = "This field is required. *";
      } else if (regex && !regex.test(value)) {
        validationErrors[name] = "Invalid Entry.";
      }
    });

  // Validation and form data processing remain unchanged

  if (Object.keys(validationErrors).length === 0) {
    try {
      const response = await registerCustomer(values);

      if (response.status) {
        setSuccessMessage("Registration Successful!!");
        e.target.reset();
        setErrorMessage("");
        onRegistrationSuccess();

        console.log("User details:", response.data);
      } else {
        setErrorMessage({ ...errorMessage, email: "User Already Exists !!" });
        setSuccessMessage("");
      }
      setIsSubmitted(true);
      setErrors({});
    } catch (error) {
      console.error('Error during API request:', error);
    }
  } else {
    console.log("Validation errors:", validationErrors);
    setErrors(validationErrors);
  }
};
 
  
  const renderError = (fieldName) => {
    if (errors[fieldName]) {
      return <div className="text-danger">{errors[fieldName]}</div>;
    }
    return null;
  };
  const handleDateOfBirth = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();
    const minDate = new Date(
      currentDate.getFullYear() - 18,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    if (selectedDate > minDate) {
      setErrorMessage({ ...errorMessage, date: "Check your date !!" });
        setSuccessMessage("");
    } else {
      setErrorMessage("");
      setSuccessMessage("");
    }
  };

  const isSubmitDisabled = Object.keys(errorMessage).length > 0;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card mt-5">
            <div className="card-body ">
              <h2 className="card-title text-center mb-4">Registration Form</h2>
              <div id="show"></div>
              <form id="myForm" onSubmit={handleSubmit}>
                {isSubmitted && successMessage && (
                  <div className="alert alert-primary" role="alert">
                    {successMessage}
                  </div>
                )}
                {formConfig.fields.map((field, index) => {
                  const { label, type, name, options } = field;
                  return (
                    <div key={index} className="mb-3">
                      <label className="form-label">{label}</label>
                      {type === "text" && (
                        <input
                          type="text"
                          name={name}
                          className="form-control"
                          placeholder={label}
                        />
                      )}
                      {type === "email" && (
                        <>
                          <input
                            type="email"
                            name={name}
                            className="form-control"
                            placeholder={label}
                          />
                          {errorMessage?.email !== "" && (
                            <div className="text-danger">
                              {errorMessage.email}{" "}
                            </div>
                          )}
                        </>
                      )}
                      {type === "password" && (
                        <input
                          type="Password"
                          name={name}
                          className="form-control"
                          placeholder={label}
                        />
                      )}
                      {type === "date" && (
                        <>
                          <input
                            type="date"
                            name={name}
                            className="form-control"
                            onChange={handleDateOfBirth}
                          />
                          {errorMessage?.date !== "" && (
                            <div className="text-danger">
                              {errorMessage.date}{" "}
                            </div>
                          )}
                        </>
                      )}
                      {type === "tel" && (
                        <input
                          type="tel"
                          name={name}
                          className="form-control"
                          placeholder={label}
                        />
                      )}

                      {type === "select" && (
                        <select name={name} className="form-select">
                          {options.map((option, optionIndex) => (
                            <option key={optionIndex} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      )}
                      {type === "radio" && (
                        <div className="form-check form-check-inline">
                          {options.map((option, optionIndex) => (
                            <div
                              key={optionIndex}
                              className="form-check form-check-inline"
                            >
                              <input
                                type="radio"
                                name={name}
                                value={option}
                                className="form-check-input"
                              />
                              <label className="form-check-label">
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                      {renderError(name)}
                    </div>
                  );
                })}
                <div className="text-center mt-4">
                  <button type="submit"className="btn btn-primary" disabled={isSubmitDisabled}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
