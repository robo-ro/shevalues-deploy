
import formJSON from './formElement.json';
import { useState, useEffect } from 'react';
import Element from './Components/signup/Element';
import { FormContext } from './FormContext';
import SimpleReactFileUpload from './Components/signup/elements/Upload'
import './registrationStyles.css'
import NavBar from './Components/navbar/NavBar'
import { bool } from 'prop-types';




function Registration() {


  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJSON[0])

  }, [])



  const { fields, page_label } = elements ?? {}

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(elements)
  }



  const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const { field_type, field_id } = field;





      if (id == field_id) {
        if (field_type == "contact") {
          field['field_value'] = event;
        }

        else {




          switch (field_type) {
            case 'checkbox':
              field['field_value'] = event.target.checked;

              break;

            default:
              field['field_value'] = event.target.value;
              break;
          }


        }
      }

      // if(field_id == "t&c" && field_value== checked){
      //     document.getElementById("submit_button").disabled = false;
      //   }

      setElements(newElements)
    });
    console.log(elements)
  }








  function terms_changed(termsCheckBox) {
    //If the checkbox has been checked
    if (!termsCheckBox.checked) {
      //Set the disabled property to FALSE and enable the button.
      document.getElementById("submit_button").disabled = true;
    }
    else {
      //Otherwise, disable the submit button.
      document.getElementById("submit_button").disabled = true;
    }
  }






  return (
    <div>
      <NavBar />
      <div className="wrapper">
        <div className="form-wrapper">
          <div className="col-md-12">
            <FormContext.Provider value={{ handleChange }}>
              <div className="App container">
                <h3>{page_label}</h3>
                <form method="post">
                  {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}


                  <div className="col-md-12">
                    <SimpleReactFileUpload />

                    <div>

                      <input type="checkbox" id="terms_and_conditions" value="1" onclick="terms_changed(this)" />
                      <label htmlFor="terms_and_conditions"> I agree to the Terms of Service</label>

                    </div>
                    <div>
                      <button type="submit" className="btn btn-primary" id="submit_button" onClick={(e) => handleSubmit(e)}  >Submit</button>
                    </div>
                  </div>
                </form>

              </div>
            </FormContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
