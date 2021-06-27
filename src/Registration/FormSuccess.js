import React from 'react';
import './Form.css';
import { useHistory } from 'react-router-dom';

//this is the page which the registration is redirected to. Once the API is integrated, this should be changed.


const FormSuccess = () => {

  const history = useHistory();
  history.push('/quiz-login');

  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
     
    </div>
  );
};

export default FormSuccess;
