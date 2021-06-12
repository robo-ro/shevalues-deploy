import React, { useContext } from 'react'
import { FormContext } from '../../../FormContext';



const CheckboxInline = ({ field_id, field_head, field_value, field_options }) => {
    const { handleChange } = useContext(FormContext)

    return (


        <div className="col-md-6">
            <div className="mb-3 form-check ci">



                <div className="form-label">
                    <label htmlFor="exampleInputEmail1" className="form-label">{field_head}</label>


                </div>



                {field_options.length > 0 && field_options.map((option, i) =>



                    <div key={i} >
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox" value={option.option_label}
                                onChange={event => handleChange(field_id, event)} />

                            <label className="form-check-label" htmlFor="inlineCheckbox">{option.option_label}</label>
                        </div>
                    </div>

                )}


            </div>
        </div>



    )
}

export default CheckboxInline









