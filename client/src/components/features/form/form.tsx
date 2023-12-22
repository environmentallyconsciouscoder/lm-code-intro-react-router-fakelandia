import React, { FormEvent } from 'react';

type ConfessionFormProps = {
  handleInputChange: (e: { target: { value: string; name: string } }) => void;
  subject: string;
  selectedOption: string;
  message: string
  errors: { subject: string[],
    selectedOption: string[],
    message: string[],}
  isFormValid: () => boolean;
  handleSubmit: (event: FormEvent) => void;
};

function ConfessionForm({ handleInputChange, subject, selectedOption, message, errors, isFormValid, handleSubmit }: ConfessionFormProps) {
  return (
    <form style={{ height: '100%' }} onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '50rem', height: '50%', justifyContent: 'space-evenly' }}>
        <label>Subject:</label>
        <input
          id='subject'
          name='subject'
          type='text'
          value={subject}
          onChange={handleInputChange}
        />
        {errors.subject.length > 0 && <p style={{ color: 'red' }}>{errors.subject}</p>}
        <label>What is 2 + 2</label>
        <select
          value={selectedOption}
          onChange={handleInputChange}
          name='selectedOption'
        >
          <option value='Mild Public Rudeness'>Mild Public Rudeness</option>
          <option value='Speaking in a Lift'>Speaking in a Lift</option>
          <option value='Not Eating Your Vegetables'>Not Eating Your Vegetables</option>
          <option value='Supporting Manchester United'>Supporting Manchester United</option>
          <option value='I just want to talk'>I just want to talk</option>
        </select>
        <textarea
          value={message}
          name='message'
          onChange={handleInputChange}
        ></textarea>
        {errors.message.length > 0 && <p style={{ color: 'red' }}>{errors.message}</p>}
        <button type="submit" disabled={!isFormValid()}>Submit</button>
      </div>
    </form>
  );
}

export default ConfessionForm;
