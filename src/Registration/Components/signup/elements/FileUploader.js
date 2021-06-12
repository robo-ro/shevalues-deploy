// import React, { useContext } from 'react';
// import {Component} from 'react';
// import { FormContext } from '../../../FormContext'
// import { Button } from 'react-bootstrap';
// import axios from 'axios';

// class FileUploader extends Component{

// state = {
//     selectedFile : null
// };


// //  handleChange  = useContext(FormContext)
// // hiddenFileInput = React.useRef(null);


// // handleClick = event => {
// //     hiddenFileInput.current.click();
// // };

// onFileChange = event =>{
// this.setState({ selectedFile:event.target.files[0]});
// }

// onFileUpload = () => {
// const formData = new FormData();

// formData.append(
//     "myFile",
//     this.state.selectedFile,
//     this.state.selectedFile.name
// );


// console.log(this.state.selectedFile); 

// axios.post("api/uploadfile", formData); 
// };




// fileData = () => {


        
// render()    

//     //   const handleChange = event => {
//     //     const fileUploaded = event.target.files[0];
//     //     props.handleFile(fileUploaded);

//     //   };
// {
//     return (

      
//              <div className="col-md-12">
//             <div className="mb-3 form-check ci">
           
//                     <Button className="btn btn-primary" onClick={this.onFileUpload} >Upload Resume</Button>
//                     <input
//                         type="file"
//                         // ref={hiddenFileInput}
//                         // onChange={event => handleChange(field_id, event)}
//                         onChange = {this.onFileChange}
//                         style={{ display: 'none' }}
//                     />
                
//         </div > 
//         {this.fileData()}
//         </div>
//     );
// }
    
// }
// }
// ;


// export default FileUploader;