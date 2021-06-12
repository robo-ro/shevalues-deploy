import React, { useContext } from 'react'
import { FormContext } from '../../../FormContext'



const Radio = ({ field_id, field_label, field_head, field_value, field_options }) => {
    const { handleChange } = useContext(FormContext)

    return (


        <div className="col-md-6">
            <div className="mb-3 form-check ci">
                <div className="form-label">

                    <label htmlFor="exampleInputEmail1" className="form-label">{field_head}</label>



                </div>



                {field_options.length > 0 && field_options.map((option, i) =>

                    <div key={i}>
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={option.option_label}
                                onChange={event => handleChange(field_id, event)} />

                            <label className="form-check-label" htmlFor="inlineRadio1">{option.option_label}</label>
                        </div>
                    </div>

                )}


            </div>
        </div>


    )
}

export default Radio









