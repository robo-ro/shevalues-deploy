import React, {useContext} from 'react';
import { FormContext } from '../../../FormContext'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'



const Contact = ({ field_id, field_label, field_placeholder, field_value }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="col-md-6">
            <div className="mb-3">
                
                <label htmlFor="exampleInputEmail1" className="form-label" >{field_label}</label>
                <PhoneInput flags={flags} type="text" className="form-control" 

id = {field_id}
                    countrySelectProps = {{unicodeFlags : true}}
                    // international
                    defaultCountry="IN"
                    placeholder={field_placeholder ? field_placeholder : ' '}
                    value={field_value}
                    onChange={event => handleChange(field_id, event)}
                     />




                <div id="emailHelp" className="form-text"></div>
            </div>
        </div>
    )
}

export default Contact;