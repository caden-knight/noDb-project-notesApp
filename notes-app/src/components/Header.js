import React from 'react';


// date variables
const today = new Date()
const month = today.getMonth() + 1
const day = today.getDate()
const year = today.getFullYear()
const currentDate = `${month}/${day}/${year}`

function Header() {
    return (
        <div>
            <header className="header">
                <h1 className="name">Caden's Sticky Notes</h1>
                <h1 className="date"> {`${currentDate}`} </h1>
            </header>
            
            
        </div>
        )
}

export default Header