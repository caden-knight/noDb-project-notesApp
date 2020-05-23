import React from 'react';
import './Reset.css'
import './App.css';
import Header from './components/Header'
import NoteBox from './components/Notebox'
import axios from 'axios'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userNotes: [],
      userInput: "",
      noteClicked: true,
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
  noteClickedToggle() { }
  dateSort() { }
  nameSort() { }
  
  render() {
    const notes = this.state.userNotes.map(note => {
      return (
        <div key={note.id}>
          <NoteBox notes={note} />
        </div>
      )
    })
    const { userNotes } = this.state
    
    console.log(this.state.userNotes)
    return <div className="App">
      <Header />

      {notes}
      

       
    </div>
  }
}
export default App;
