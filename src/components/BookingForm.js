import React, {Component} from 'react';

import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const BookingForm =(props)=>{
        return (
            <div>
              <Modal
          isOpen={props.openModal}
          
          style={customStyles}
          contentLabel="BookingForm"
        >
 
          <h2 >Hello</h2>
          <button onClick={props.closeModal} >close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>

            </div>
        )
    }


export default BookingForm;