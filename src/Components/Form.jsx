import React from 'react'
import {useState } from 'react'
import { usePaystackPayment } from 'react-paystack';
import Modal from './Modal';

function Form({state, setState}) {
    
    const REACT_APP_KEY = process.env.REACT_APP_API_KEY
    const config = {
        reference: (new Date()).getTime().toString(),
        email: state.email,
        amount: state.amount * 100,
        publicKey: REACT_APP_KEY
    };
    const initializePayment = usePaystackPayment(config); 
    const [valid, setValid] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('')

    const onSuccess = () => {
        setTimeout(() => setIsModalOpen(false), 4000)
        setIsModalOpen(true)
        setSuccessMessage(`Thank you for the Donation ${state.name}`)
        
      };

    const onClose = () => {
        setIsModalOpen(true)
        setSuccessMessage(`Unable to complete donation ${state.name}`)
    };


    const handleBlur = (e) => {
        if(e.target.value === ''){
            setValid(false)
        } else if(e.target.value === state.email && !state.email.includes('@')){
            setValid(false)
        } else {
            setValid(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(valid){
            setState({...state, name: '', email: '', phone: '', amount: ''})
        } else {
            return
        }
    }

    console.log(valid)
    return (
        <div className='w-full md:w-3/4 h-full md:h-1/2 lg:h-5/6 '>
            <form onSubmit={handleSubmit} className='w-full h-full px-10 md:px-0 bg-gray-200 flex flex-col justify-center items-center'>
                <h3 className='font-sans text-4xl md:text-3xl text-yellow-400 font-semibold'>Donate</h3>
                <label htmlFor='name' className='block text-2xl mb-1 w-full md:text-xl md:w-3/4'>Name
                    <input type='text' name='name' value={state.name} onChange={(e) => {setState({...state, name: e.target.value})}} className='block px-4 py-3 border-2 border-gray-200 w-full'/>
                </label>
                <label htmlFor='email' className='block text-2xl mb-1 w-full md:text-xl md:w-3/4'>Email
                    <input type='email' name='email' value={state.email} onChange={(e) => {setState({...state, email: e.target.value})}} onBlur={handleBlur} className='block px-4 py-3 border-2 border-gray-200 w-full' />
                    {!valid ? <p className='text-red-600 text-sm'>This field is required or Enter a valid email address</p> : null}
                </label>
                <label htmlFor='amount' className='block text-2xl mb-1 w-full md:text-xl md:w-3/4'>Amount
                    <input type='text' name='amount' value={state.amount} onChange={(e) => {setState({...state, amount: e.target.value})}} onBlur={handleBlur} className='block px-4 py-3 border-2 border-gray-200 w-full'/>
                    {!valid ? <p className='text-red-600 text-sm'>Enter Amount</p> : null}
                </label>
                <div className='w-3/4 mt-2 self-start md:self-auto md:mt-0'>
                    <button disabled={valid ? false : true} className='px-4 py-3 bg-yellow-400 text-white text-2xl md:text-xl font-bold w-36' onClick={() => {
                        initializePayment(onSuccess, onClose)
                        }}>Proceed
                    </button>
                </div>
            </form>
            <Modal isOpen={isModalOpen} message={successMessage} />
        </div>
    )
}

export default Form
