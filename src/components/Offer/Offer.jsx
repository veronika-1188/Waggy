import './offer.scss'
import decor from '../../assets/img/decor.svg'
import React, { useRef } from 'react'
import { useState } from "react";
import useLocalStorage from '../../hooks/useLocalStorage';

function Offer() {
  const [submits, setSubmits] = useLocalStorage('submissions', [])
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  // const [touched, setTouched] = useState({
  //   email: false,
  //   name: false,
  //   message: false
  // })
  const firstTouchTime = useRef(null)

  function handleChange(e){
    const {name, value} = e.target

    if(name === 'email'){
      setEmail(value);      
    }
    if(name === 'name'){
      setName(value);      
    }
    if(name === 'message'){
      setMessage(value);      
    }
    if (firstTouchTime.current === null){
      firstTouchTime.current = Date.now()
      console.log(firstTouchTime)
    }
    console.log(firstTouchTime)
    

  }
  function handleSubmit(e) {
    e.preventDefault()
    let sendTime = Date.now();
    if ((sendTime - firstTouchTime.current) < 2000 ){
      setErrorMessage('Слишком быстро. Вы не робот?')
      return;
    }
    let subm = {
      email: email,
      name: name,
      message: message,
      sendedTime: new Date().toISOString()
    }
    console.log(subm)
    setSubmits(prev => {return [...prev, subm]})
    setSuccessMessage('Успешная отправка')
    return;
    

  }
  return (
    <section className="offer">
    <div className='decor'>
      <img src={decor} alt="decor" />
    </div>
   
      <div className="offer__title">Get <span className="text_accent">20% Off</span> on <br></br>first Purchase
      </div>
      <form className="offer__form" onSubmit={handleSubmit}>
        <input type="email" 
        placeholder="your email address"
        name='email'
        onChange={handleChange} 
        required='true'
        />

        <input type="text" 
        placeholder="your Full Name"
        name='name'
        onChange={handleChange}
        required='true'/>

        <input type="text" 
        placeholder="Message"
        name='message'
        onChange={handleChange}
        required='true'/>

        <button type="submit">Send Message</button>
        {errorMessage && 
        <p style={{color: 'red'}}>{errorMessage}</p>}

        {successMessage && 
        <p style={{color: 'green'}}>{successMessage}</p>}
        
      </form>
        <div className='decor'>
      <img src={decor} alt="decor" />
    </div>
    </section>
  )
}

export default Offer;