import React from "react";

const SecondStep = ({ formData, setFormData }) => {
  const onChangeHandlerName = (e) => {
    setFormData({ ...formData, fullname: e.target.value });
  };
  const onChangeHandlerEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  return (
  
    <div>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            required
            onChange={onChangeHandlerName}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={onChangeHandlerEmail}
          />
        </div>

      </div>
  
  );
};

export default SecondStep;
