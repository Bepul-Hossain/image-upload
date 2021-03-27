import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  state = {
    photo: null,
    mytex: "hello"
  }

  photoHandler = (e) => {
    e.preventDefault();
    axios.get('http://localhost:8000/605ed53c8232ff70f0cdde4a').then(res => {
      console.log(res.data.data.photo)
      console.log(res.data.data.mytext)
      this.setState({ photo: res.data.data.photo, mytex: res.data.data.mytext })
    }).catch(err => {
      console.log(err)

    })
  }

  render() {
    const photo = this.state.photo;
    console.log(photo);
    return (

      <div className="App">
        <button onClick={this.photoHandler}>Click</button>
        <p>{this.state.mytex}</p>

        <img style={{ width: '500px', height: '500px' }} src={`http://localhost:8000/${photo}`} alt="checking" />


      </div>
    )
  }

}

export default App;
