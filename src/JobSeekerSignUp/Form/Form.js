import React, { useState } from 'react';
// import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { useHistory } from 'react-router-dom';


const Form = () => {

const history = useHistory();

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
       
       
        {!isSubmitted ? (
        
          <FormSignup submitForm={submitForm} />
         
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
