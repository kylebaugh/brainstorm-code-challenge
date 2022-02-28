import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const DisplayNumber = (props) => {

    let sorted = props.book.sort((a,b) => a.lastName > b.lastName ? 1 : -1)
    // useEffect(() => {
        let bookMap = sorted.map(el =>
            <tbody>
                <tr className='tableCell'>{el.firstName}</tr>
                <tr className='tableCell'>{el.lastName}</tr>
                <tr className='tableCell'>{el.number}</tr>
            </tbody> 
            )
    // })


    return(
        <div id='displayPage'>
            <h2>Display section</h2>
            <table >
                <thead id='displayTable'>
                    <th className='tableCell'>First Name</th>
                    <th className='tableCell'>Last Name</th>
                    <th className='tableCell'>Phone Number</th>
                </thead>
                {bookMap}
            </table>
        </div>
    )
}

export default DisplayNumber