import React from 'react'

const Modal = ({isOpen, message}) => {
  return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">{message}</p>
            </div>
        </div>
    )
}

export default Modal;