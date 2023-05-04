import React from 'react'
import {useState } from 'react'
import { usePaystackPayment } from 'react-paystack';
import {useNavigate} from 'react-router-dom'

function Form({state, setState}) {
    // const REACT_APP_KEY = process.env.REACT_APP_API_KEY
    
    const config = {
        reference: (new Date()).getTime().toString(),
        email: state.email,
        amount: state.amount * 100,
        publicKey: 'pk_test_4d7bf0192e908fc302a039eb9b75eb1220be29f9'
    };
    const navigate = useNavigate();
    const initializePayment = usePaystackPayment(config); 
    const [valid, setValid] = useState(true);

    const onSuccess = () => {
        navigate('/success')
      };

    const onClose = () => {
        navigate('/')
    };

    const handleBlur = (e) => {
        if(e.target.value ===''){
            setValid(false)
        }
        else if(e.target.value === state.email && !state.email.includes('@')){
            setValid(false)
        }
       else {
        setValid(true)
       }
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (valid){
            setState({...state, name: '', email: '', phone: '', amount: '5000'})
        }
        else {
            return
        }
    }
    console.log(valid)
  return (
    <div className='w-full h-screen flex items-center justify-center bg-yellow-400'>
        <form onSubmit={handleSubmit} className='w-3/4 md:w-1/2 h-3/4 md:h-1/2 lg:h-3/4 bg-white px-10 pt-2 flex flex-col justify-center lg:justify-start'>
        <label htmlFor='name' className='block text-xl mb-1'>Name
            <input type='text' name='name' value={state.name} onChange={(e) => {setState({...state, name: e.target.value})}} className='block px-4 py-3 border-2 border-gray-200 w-full md:w-3/4 mb-3 lg:mb-2'/>
        </label>
        <label htmlFor='email' className='block text-xl mb-1'>Email
            <input type='email' name='email' value={state.email} onChange={(e) => {setState({...state, email: e.target.value})}} onBlur={handleBlur} className='block px-4 py-3 border-2 border-gray-200 w-full md:w-3/4 mb-3 lg:mb-2' />
            {!valid ? <p className='text-red-600 text-base mb-1'>This field is required or Enter a valid email address</p> : null}
        </label>
        <label htmlFor='phone' className='block text-xl mb-1'>Phone Number
            <input type='phone' name='phone' value={state.phone} onChange={(e) => {setState({...state, phone: e.target.value})}} className='block px-4 py-3 border-2 border-gray-200 w-full md:w-3/4 mb-3 lg:mb-2'/>
        </label>
        <label htmlFor='amount' className='block text-xl mb-1'>Amount
            <input type='text' name='amount' value={state.amount} onChange={(e) => {setState({...state, amount: e.target.value})}} onBlur={handleBlur} className='block px-4 py-3 border-2 border-gray-200 w-full md:w-3/4 mb-3 lg:mb-2'/>
            {!valid ? <p className='text-red-600 text-base mb-1'>Enter Amount</p> : null}
        </label>
        <div className='w-full'>
            <button disabled={valid ? false : true} className='px-4 py-3 bg-yellow-300 text-white text-xl font-bold w-30' onClick={() => {
                initializePayment(onSuccess, onClose)
                }}>Proceed
            </button>
        </div>
        </form>
    </div>
  )
}

export default Form


    
    
          
     

