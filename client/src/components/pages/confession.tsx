import React, { FormEvent, useState } from 'react'
import ConfessionForm from '../features/form/form';
import Validator from '../features/validate/validator';

function Confession() {

  const [subject, setSubject] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    subject: [],
    selectedOption: [],
    message: [],
  });

  const handleInputChange = (event: {target: { value: string, name: string };}) => {
    const { name, value } = event.target;
    switch (name) {
      case 'subject':
        setSubject(value);
        break;
      case 'selectedOption':
        setSelectedOption(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }

    const getValidationErrors = Validator(value, name);
    const validationErrors = getValidationErrors === null ? [] : getValidationErrors;
    console.log("validationErrors", validationErrors)
    setErrors((prevErrors) => ({ ...prevErrors, [name]: validationErrors }));

  }

  const isFormValid = () => {
    return (
      Object.values(errors).every((errorArray) => errorArray.length === 0)
      &&
      subject.trim() !== '' &&
      selectedOption.trim() !== '' &&
      message.trim() !== ''
    );
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log("SUBMITTED");
    // Add logic for form submission if needed
  };

  return (
    <>
      <ConfessionForm
        handleInputChange={handleInputChange}
        subject={subject}
        selectedOption={selectedOption}
        message={message}
        errors={errors}
        isFormValid={isFormValid}
        handleSubmit={handleSubmit}
      />

    </>
  )
}

export default Confession