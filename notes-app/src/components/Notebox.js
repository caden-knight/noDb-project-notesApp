import React from 'react';
import Edit from './Edit'

export default function NoteBoxes(props) {
    let noteNumber = props.notesArr.indexOf(props.notes) + 1
    const totalLength = props.notesArr.length
    return (
        <div style={{ display: "flexbox" }} id="boxes">
            
            {console.log(props.editNote)}
            <div className="notes">
                <div className="note-header">
                    <h3 className="note-title">{props.notes.title} {props.notes.id}</h3>
                    <Edit
                        postedNotes={props.notesArr}
                        notes={props.notes}
                        editNote={props.editNote}
                        toggleEdit={props.toggleEdit}
                        delete={props.delete}


                    />
                    
                </div>
                    <h4 className="note-date">{props.notes.date}</h4>
                    <p className="note-content">{props.notes.note}</p>
                <h4> { `${noteNumber}/${totalLength}`} </h4>
            </div>
            
        </div>
        )
    
}