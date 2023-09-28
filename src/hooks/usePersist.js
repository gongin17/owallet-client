import { useState, useEffect } from "react";

const usePersist = () => {
  const [persist, setPersist] = useState(
     true
  );

  //JSON.parse(localStorage.getItem("persist", persist)) || 

 useEffect(() => {
    localStorage.setItem("persist", JSON.stringify(persist));
    console.log("persist",persist)
  }, [persist])

  return [persist, setPersist];
};

export default usePersist;
