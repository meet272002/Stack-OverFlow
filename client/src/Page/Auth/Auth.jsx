import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
// import {useHistory} from 'react-router-dom';
import './Auth.css';
import icon from '../../assets/login.png';
import AboutAuth from './AboutAuth';
import { signup,login } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';
const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(false);    
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');


    const dispatch = useDispatch();
    // const history = useHistory();
    const navigate = useNavigate();

    const handleSwitch = () => {
        setIsSignUp(!isSignUp) //passing false if true and true if false.
    }

    const handleSubmit = (e) => {
        e.preventDefault() //to eleminate the email and passord from showing in the url
        if(!email || !password){
            alert("Enter the email id and password")
        }
        if(isSignUp)
        {
            if(!name)
            {
                alert("Enter a name to continue")
            }
            dispatch(signup({name,email,password},navigate));        
        }
        else
        {
            //sending auth data to actions
            dispatch(login({name,email,password},navigate));
        }
        console.log({name,email,password})
    }
    return (
    <section className='auth-section'>
        {isSignUp && <AboutAuth/>}
        <div className='auth-container-2'>
            {!isSignUp && <img src={icon} alt='stackoverflow' className='login-logo' height="50px" width="50px"></img>}
            <form onSubmit={handleSubmit}>
                {
                    isSignUp && (  
                        <label htmlFor='name'>
                            <h4>Display Name</h4>
                            <input type='name' name='name' id='name' onChange={(e)=>{setname(e.target.value)}}></input>
                        </label>   
                    )
                }
                <label htmlFor='email'>
                    <h4>Email</h4>
                    <input type='email' name='email' id='email' onChange={(e)=>{setemail(e.target.value)}}></input>
                </label>
                <label htmlFor='password'>
                    <div style={{display:'flex',justifyContent:"space-between"}}>
                        <h4>password</h4>
                        {!isSignUp && <p style={{color:"#007ac6",fontSize:"13px"}}>Forget Password?</p>}
                    </div>
                    <input type='password' name='password' id='password' onChange={(e)=>{setpassword(e.target.value)}}></input>
                    {isSignUp && (
                        <p style={{color:"#666767", fontSize:"13px"}}>
                            Passord Must Contain atleast one character<br/>,one number,one special Character and Password must have <br/>length of 8 character or more. 
                        </p>
                    )}
                </label>
                {   
                    isSignUp && (
                        <label htmlFor='check'>
                            <input type='checkbox' id='check'/>
                            <p style={{fontSize:"13px"}}>Opt-in to receive occasional<br/> product updates,user reseach invitations,<br/>company annoucment and digests. </p>
                        </label>
                    ) 
                }
                <button type='submit' className='auth-btn'>
                    {isSignUp ? 'SignUp':'Login'}</button>
                    {isSignUp && (
                        <p style={{color:"#666767", fontSize:"13px"}}>
                            by Clicking "Sign Up",you agree to our 
                            <span style={{color:"#007ac6"}}>terms of <br/>services</span>,
                            <span style={{color:"#007ac6"}}>privacy policy</span> and 
                            <span style={{color:"#007ac6"}}>cookie policy.</span> 
                        </p>
                    )}
            </form>
            <p>
                {isSignUp ? 'Already have an account?' : "Don't have an acoount?"}
                <button type='button' className='handle-Switch-btn' onClick={handleSwitch}>
                    {isSignUp ? 'Login' : 'SignUp'}</button>
            </p>
        </div>
    </section>
  )
}

export default Auth
 