import React from 'react';
import editBtn from '../buttons/editBtn.png'
import deleteBtn from '../buttons/deleteBtn.png'


export default function NoteBoxes(props) {
    return (
        <div style={{display: "flexbox"}} id="boxes">
        {console.log(props.notes)}
            <div className="notes">
                <div className="note-header">
                    <h3 className="note-title">{props.notes.title}</h3>
                    <img className="btn editBtn" src={editBtn} alt="delete"/>
                    <img className="btn deleteBtn" src={deleteBtn} alt="delete" />
                </div>
                    <h4 className="note-date">{props.notes.date}</h4>
                    <p className="note-content">{props.notes.note}</p>
            </div>
        </div>
        )
    
}