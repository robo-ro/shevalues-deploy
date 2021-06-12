import React from 'react'
import Input from './elements/Input'
import Select from './elements/Select'
import Checkbox from './elements/Checkbox'
import Radio from './elements/Radio'

import FileUploader from './elements/FileUploader'
import PhoneInput from './elements/Contact'
import CheckboxInline from './elements/CheckboxInline'


const Element = ({ field: { field_type, field_id, field_label, field_placeholder, field_value, field_options, field_head } }) => {

    switch (field_type) {
        case 'text':
            return (<Input
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}

            />)
        case 'select':
            return (<Select
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                field_options={field_options}
            />)
        case 'checkbox':
            return (<Checkbox
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
            />)
        case 'radio':
            return (<Radio
                field_id={field_id}
                field_label={field_label}
                field_head={field_head}
                field_value={field_value}
                field_options={field_options}
            />)

        case 'inlineChecks':
            return (<CheckboxInline
                field_id={field_id}
                field_head={field_head}
                field_label={field_label}
                
                field_value={field_value}
                field_options={field_options}
            />)


        // case 'fileUploader':
        //     return (<FileUploader
        //         field_id={field_id}
                
        //         field_label={field_label}

        

        //     />)

            case 'contact':
                return (<PhoneInput
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_type = {field_type}
    
                />)

        default:
            return null;
    }


}


export default Element