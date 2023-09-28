import React from "react";

const FirstStep = ({ formData, setFormData }) => {

    const onChangeHandler=(e)=>{setFormData({...formData,account_number : e.target.value
   })}

  return (
   
 
        
        <div >
         
          <input type="text" 
          placeholder="ex: 14XXXXXXX23" 
          required
          onChange={onChangeHandler}  
           />
     
    </div>
  
  );
};

export default FirstStep;
