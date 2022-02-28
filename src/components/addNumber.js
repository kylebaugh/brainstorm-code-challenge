import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const AddNumber = (props) => {

    const [firstName, setFirstName] = useState('Coder')
    const [lastName, setLastName] = useState('Byte')
    const [number, setNumber] = useState('8885559999')

    const submitButton = () => {

        console.log('Form submission')
    
        let newEntry = {
          firstName: firstName,
          lastName: lastName,
          number: number
        }   
    
        props.setBook([...props.book,newEntry])
    
        setFirstName('')
        setLastName('')
        setNumber('')
      }

    return (
        <div id='addPage'>
            <h2>Add number</h2>
            <section className='addInput'>
                <p>First Name</p>
                <input 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}    
                />
            </section>

            <section className='addInput'>
                <p>Last Name</p>
                <input 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)}    
                />
            </section>

            <section className='addInput'>
                <p>Number</p>
                <input 
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}    
                />
            </section>

            <button id='submitButton' onClick={() => submitButton()}>Submit!</button>
        </div>
    )
}

export default AddNumber