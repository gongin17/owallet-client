import React,{useState,useEffect} from 'react'


const ThirdStep = ({ formData, setFormData }) => {
 
   const [amount,setAmount]=useState()
  const [confirmAmount,setConfirmAmount]=useState()
 

  const onChangeHandlerAmount = (e) => {
  setAmount(e.target.value)
  }

  const onChangeHandlerConfirmAmount = (e) => {
    setConfirmAmount( e.target.value );
  }

useEffect(()=>{

   if(amount===confirmAmount && confirmAmount!=undefined) {
      setFormData({ ...formData, amount: amount })
  }

},[amount ,confirmAmount])


  return (
    
      <>
       <p style={{color:"white"}}>{amount !== confirmAmount ?"not matching" : null}</p>
      <div >
      <input
            type="number"
            placeholder="Amount"
            required
            onChange={onChangeHandlerAmount}
          />
      </div>
      <div >
      <input
            type="number"
            placeholder="Confirm amount"
            required
            onChange={onChangeHandlerConfirmAmount}
          />
      </div>
      </>
   
    
  )
}

export default ThirdStep