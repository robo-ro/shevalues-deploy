import { useState, useEffect } from 'react';

import axios from 'axios';





const useForm = (callback, validate) => {



  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    user_email: '',
    phone_number: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

   

    const axios = require('axios')

    axios.post('http://13.126.181.110:8091/python/shevalues/user_login', {

      data: {
        "first_name": values.first_name,
        "last_name": values.last_name,
        "user_email": values.user_emai,
        "phone_number": values.phone_number,
        "password": values.password
      }


    })
      .then(function (response) {
        console.log(response);
      })







  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
