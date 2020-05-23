import React from 'react';
import './Reset.css'
import './App.css';
import Header from './components/Header'
import NoteBox from './components/Notebox'
import axios from 'axios'
import addBtn from './buttons/add-btn.svg'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userNotes: [],
      noteClicked: false,
      creating: false,
      userInputTitle: "",
      userInputDate: "",
      UserInputNote: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.dateSort = this.dateSort.bind(this)
    this.nameSort = this.nameSort.bind(this)
  }
  componentDidMount() { 
    console.log('Mounted Blade')
    axios.get('/api/notes')
      .then(res => {
        this.setState({ userNotes: res.data })
    })
  }
  createNew(title, date, note) { 
    const body = {title, date, note}
    axios.post('api/notes', body)
      .then(res => {
        this.setState({
          userNotes: res.data
        })
      })
    this.createToggle()
  }
  editNote() { }
  deleteNote() { }
  createToggle() { 
    const {creating} = this.state
    this.setState({
      creating: !creating
    })
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

  dateSort() { }
  nameSort() { }
  
  
  render() {
    const notes = this.state.userNotes.map(note => {
      return (
        
        <NoteBox key={note.id}
          notes={note}
          add={this.createNew}/>
      
      )
    })
    const { userNotes } = this.state
    const newTitle = this.state.userInputTitle
    const newDate = this.state.userInputDate
    const newNote = this.state.userInputNote
    
    console.log(this.state.userNotes)
    return <div className="App">
      <Header
        notes={userNotes}
        addNote={this.createNew}
      />
      {!this.state.creating ? <p className="add-btn-space">
        <img onClick={() => this.createToggle()} className="addBtn" src={addBtn} alt="add-button" />
      </p> : <div className="input-field">
          <input onChange={(title) => this.createTitle(title)} placeholder="Create a Title" className="inp inp-title"></input>
          <input onChange={(date) => this.createDate(date)} placeholder="Enter Date" className="inp inp-date"></input>
          <input onChange={(note) => this.createNote(note)} placeholder="Your note goes here..." className="inp inp-note"></input>
          <button onClick={() => this.createNew(newTitle, newDate, newNote)} className="submit">Post Note</button>
          <button onClick={() => { this.createToggle() }} className="cancel">Cancel</button>
          {console.log(this.state.userInputTitle)}
      </div> }
      
      {notes}
      

       
    </div>
  }
}
export default App;
