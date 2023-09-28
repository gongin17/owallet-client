import React from "react";
import { useState ,useEffect } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { useCreateNewTransactionMutation } from './features/transactions/transactionsSlice'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const SendMoney = () => {

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    account_number: null,
    amount:20,
    type:"deposit",
  });
  const navigate=useNavigate()
  const dispatch=useDispatch()
 const [createNewTransation, { isLoading, error }]=useCreateNewTransactionMutation();

console.log("form data is :",formData)
  useEffect(()=>{
    console.log('nuber page',page)
   if (page > 2) setPage(0);
  },[page])

  const handleSubmit = async(e) => {
    e.preventDefault()
    setPage(prev=>prev + 1);
    //&& formData
    if(page===2 ){
      try{
        await createNewTransation( {  amount: 20, type: "deposit" })
        navigate("/dashboard")
       
      }catch(err){
        console.log('error',err)
      }
      
    }
  
   // if (page > 2) setPage(0);///
    //console.log('functin page',page)
   
  };


  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <FirstStep formData={formData} setFormData={setFormData} />;
      case 1:
        return <SecondStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <ThirdStep formData={formData} setFormData={setFormData} />;
      default:
        return <FirstStep  formData={formData} setFormData={setFormData} />;


        //className="back-next"
    }
  };

  return (
    <div className="multistep-form">
      <div >
      {conditionalComponent()}
      </div>
   
      <div className="back-next">
      <button  onClick={handleSubmit}>
        { page === 0 || page === 1 ? "Next" : "Submit"}
      </button>
      {page > 0 &&<button  onClick={() => setPage(prev=>prev - 1)}>Back</button>}
      </div>
      
     
      
    </div>
  );
};

export default SendMoney;
