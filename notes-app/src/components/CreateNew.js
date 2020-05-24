import React, { Component } from 'react';
import addBtn from '../buttons/add-btn.svg'

export default class CreateNew extends Component {
    constructor() {
        super()
        this.state = {
            userInputTitle: "",
            userInputDate: "",
            userInputNote: ""
        }
    }
    
    createTitle(title) {
        this.setState({
          userInputTitle: title.target.value
        })
    
      }
    
    createDate(date) {
        this.setState({
          userInputDate: date.target.value
        })
      }
    
    createNote(note) {
        this.setState({
          userInputNote: note.target.value
        })
      }
    
    
    
    render() {
        const newTitle = this.state.userInputTitle
        const newDate = this.state.userInputDate
        const newNote = this.state.userInputNote
        return (
            <div className="create-note">
                {!this.props.isCreating ? <p className="add-btn-space">
        <img onClick={() => this.props.toggle()} className="addBtn" src={addBtn} alt="add-button" />
      </p> : <div className="input-field">
          <input onChange={(title) => this.createTitle(title)} maxLength="20" placeholder="Title (max 20 characters)" className="inp inp-title"></input>
          <input onChange={(date) => this.createDate(date)} placeholder="MM/DD/YYYY" className="inp inp-date"></input>
          <input onChange={(note) => this.createNote(note)} placeholder="Your note goes here..." className="inp inp-note"></input>
          <button onClick={() => this.props.addNote(newTitle, newDate, newNote)} className="submit">Post Note</button>
          <button onClick={() => { this.props.toggle() }} className="cancel">Cancel</button>
          {console.log(this.props)}
        </div>}
            </div>
        )
    }
}