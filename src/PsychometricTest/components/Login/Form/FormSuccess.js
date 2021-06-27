import React, {useEffect} from 'react';
import './Form.css';
import { useHistory } from 'react-router-dom';




const FormSuccess = () => {

  useEffect(() => {
    window.location.href = "https://ganant25.github.io/Pyscometric-Deployed/";
  }, []);

  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Please Wait...</h1>
     
    </div>
  );
};

export default FormSuccess;
