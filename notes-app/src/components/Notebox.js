import React from 'react';

export default function NoteBoxes(props) {
    return (
        <div className="boxes">
        {console.log(props.notes)}
            <ul className="notes">
                <li className="note note-1">
                    <h3>{props.notes.title}</h3>
                    <h4>{props.notes.date}</h4>
                    <p>{props.notes.note}</p>
                </li>
                <li className="note note-2">
                    <h3>{props.notes.title}</h3>
                    <h4>{props.notes.date}</h4>
                    <p>{props.notes.note}</p>
                </li>
                <li className="note note-3"></li>
                <li className="note note-4"></li>
                <li className="note note-5"></li>
                <li className="note note-6"></li>
            </ul>
        )
        </div>
    )
}