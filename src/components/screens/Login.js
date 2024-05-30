import React,{useState,useEffect} from 'react'
import './Loginn.css'
import {auth,provider} from "../../firebass"
import { signInWithPopup } from 'firebase/auth'
import Home from './Home'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Profile from './Profile'

function Login() {
    const [value, setvalue] = useState('')
    const handleclick=()=>{
        signInWithPopup(auth,provider).then((data)=>{
                setvalue(data.user.email)
                localStorage.setItem("email",data.user.email);
        })
    }

    useEffect(() => {
     setvalue(localStorage.getItem('email'))
    
     
    })
    

  return (

    <div className='login-back'>
        <img src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyaWVzfGVufDB8fDB8fHww&w=1000&q=80" alt="lib" />
        {value?<Home/>:
        <div className="signin">

        
            <button  className="button-86" onClick={handleclick}>
            <i className='fab fa-google' style={{marginRight: '10px', height: '10px'  }}></i>Sign in with Google </button>
  </div>
}  
        
    </div>
  )
}

export default Login