import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react"
import  "./Registratsiya.css"
  //  const [regis, setRegis]=useState()
function Registratsiya() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  // const number = document.getElementById("number")
  // const paswort = document.getElementById("paswort")
  // const regform = document.getElementById("regform")

  // if(localStorage.getItem("991234567")!==number.value){
  //   // localStorage.setItem("991234567",number.value)
  //   // localStorage.setItem("advokat_admin",paswort.value)
  // }
  const regForm=(e)=>{

  }
    return (
      <>
       
       {/* <div className="registr" >
        <div className="container registr__container">
           <form className="regform" id="regform" >
            <input id="number" className="input" type="text" placeholder="Phone number" />
            <input id="paswort" className="input" type="text" placeholder="Password" />
            <button type="submit" id="submit" className="regbtn">Submit</button>
           </form>

        </div>
       </div> */}
       {/* <div className="registr">
        <div className="container registr__container">
        <p className="title">Registration Form</p>

           <form className="App">
    <input type="text" />
    <input type="email" />
    <input type="password" />
    <input type={"submit"}
        style={{ backgroundColor: "#a1eafb" }} />
</form>
</div>

</div> */}
      </>
    )
  }
  
  export default Registratsiya