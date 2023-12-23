import React, { FormEvent, useEffect, useState } from 'react'
import ConfessionForm from '../features/form/form';
import Validator from '../features/validate/validator';
import useApi from '../hooks/useFetch';

function Confession() {

  const [subject, setSubject] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    subject: [],
    selectedOption: [],
    message: [],
  });

  const { fetchData, dataFromPostRequest, loading } = useApi();

  useEffect(() => {
      console.log('After fetchData dataFromPostRequest:', dataFromPostRequest);
      const isConfessionAMisdemeanour = dataFromPostRequest !== null ? dataFromPostRequest?.justTalked === false : false;
      console.log("after loading", loading)
    if (isConfessionAMisdemeanour) {
      console.log("need to add to the list")
    }
  }, [dataFromPostRequest, loading]);

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

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    console.log("before loading", loading)
    console.log("SUBMITTED");
    const body = {
      "subject": subject,
      "reason": selectedOption, // either a MisdemeanourKind OR the string `just-talk`
      "details": message
    }
    console.log("Before fetchData dataFromPostRequest", dataFromPostRequest);
    await fetchData("http://localhost:8080/api/confess", 'POST', body);
    console.log("this console.log will show before the function fetchData finish executing", dataFromPostRequest);
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
        loading={loading}
      />
    </>
  )
}

export default Confession