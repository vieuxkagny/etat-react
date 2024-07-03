
import './App.css';

import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Vieux Kagny',
        bio: 'Un développeur passionné par les nouvelles technologies.',
        imgSrc: './IMG-11.jpg', // URL d'exemple pour l'image
        profession: 'Développeur Web',
      },
      show: false,
      timeElapsed: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
      timeElapsed: 0, // Reset time when toggling
    }));
    if (!this.state.show) {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.setState((prevState) => ({
          timeElapsed: prevState.timeElapsed + 1,
        }));
      }, 1000);
    }
  };

  render() {
    const { Person, show, timeElapsed } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Cacher' : 'Montrer'} les détails
        </button>
        {show && (
          <div className="Person">
            <h1>{Person.fullName}</h1>
            <img src={Person.imgSrc} alt={Person.fullName} className="profile-img" />
            <p>{Person.bio}</p>
            <h2>{Person.profession}</h2>
            <p>Temps écoulé depuis le montage: {timeElapsed} secondes</p>
          </div>
        )}
      </div>
    );
  }
}


export default App;
