import React, {useContext} from 'react';
import { FormContext } from '../../../FormContext'


const Checkbox = ({ field_id, field_label, field_value }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <div className="col-md-12">
        <div className="mb-3 form-check">
            
            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={field_value}
                onChange={event => handleChange(field_id, event)}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">{field_label}</label>
        </div>
     </div>
    )
}





export default Checkbox;


