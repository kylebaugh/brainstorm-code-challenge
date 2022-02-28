import React, { useState, useEffect } from 'react';
import AddNumber from './addNumber'
import DisplayNumber from './displayNumber'

const Application = () =>{

    const [book, setBook] = useState(
        [

        ]
    )

    useEffect(() => {
        console.log('Use Effect')
    }, [book])

    return(
        <div id='mainPage'>
            <h1>Phone Book</h1>
            <br/>
            <br/>
            <AddNumber
                book={book}
                setBook={setBook}
            />
            <br/>
            <br/>

            <DisplayNumber
                book={book}
            />

            <br/>
            <br/>
        </div>
    )
}

export default Application