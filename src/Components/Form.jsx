import React from 'react'
import {useState } from 'react'
import { usePaystackPayment } from 'react-paystack';
import Modal from './Modal';
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';

function Form({state, setState}) {
    const navigate = useNavigate()
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
        setTimeout(()=> {navigate('/')}, 2000) 
      };

    const onClose = () => {
        setIsModalOpen(true)
        setSuccessMessage(`Unable to complete donation ${state.name}`)
        setTimeout(()=> {navigate('/')}, 2000)
    };

    const handleBlur = (e) => {
        if(e.target.value === ''){
            setValid(false)
        } else if(e.target.value === state.email && !state.email.includes('@')){
            setValid(false)
        } else {
            setValid(true)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(valid){
            setState({...state, name: '', email: '', phone: '', amount: ''})
        } else {
            return
        }
    };

    return (
        <div className='w-full h-screen bg-gray-300'>
            <Menu/>
            <div className='w-full h-3/4 mt-8 md:w-1/2 md:h-1/2 lg:w-3/4 lg:h-3/4 m-auto md:mt-24 lg:mt-10'>
                <form onSubmit={handleSubmit} className='w-full h-full px-10 md:px-0 bg-gray-100 flex flex-col justify-center items-center'>
                    <h3 className='font-sans text-4xl md:text-3xl md:mb-5 lg:mb-1 text-yellow-400 font-semibold'>Donate</h3>
                    <label htmlFor='name' className='block text-2xl mb-2 w-full md:text-xl md:w-3/4'>Name
                        <input type='text' name='name' value={state.name} onChange={(e) => {setState({...state, name: e.target.value})}} className='block px-4 py-3 border-2 border-gray-200 w-full'/>
                    </label>
                    <label htmlFor='email' className='block text-2xl mb-2 w-full md:text-xl md:w-3/4'>Email
                        <input type='email' name='email' value={state.email} onChange={(e) => {setState({...state, email: e.target.value})}} onBlur={handleBlur} className='block px-4 py-3 border-2 border-gray-200 w-full' />
                        {!valid ? <p className='text-red-600 text-sm'>This field is required or Enter a valid email address</p> : null}
                    </label>
                    <label htmlFor='amount' className='block text-2xl mb-2 w-full md:text-xl md:w-3/4'>Amount(NGN)
                        <input type='text' name='amount' value={state.amount} onChange={(e) => {setState({...state, amount: e.target.value})}} onBlur={handleBlur} className='block px-4 py-3 border-2 border-gray-200 w-full'/>
                        {!valid ? <p className='text-red-600 text-sm'>Please Enter Amount</p> : null}
                    </label>
                    <div className='w-3/4 mt-2 self-start md:self-auto md:mt-3'>
                        <button disabled={valid ? false : true} className='px-4 py-3 bg-yellow-400 text-white text-2xl md:text-xl font-bold w-36' onClick={() => {
                            initializePayment(onSuccess, onClose)
                            }}>Proceed
                        </button>
                    </div>
                </form>
                <Modal isOpen={isModalOpen} message={successMessage} />
            </div>
        </div>
    )
}

export default Form
