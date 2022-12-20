import React from 'react';
import Header from './components/Header';
import './App.css';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="titulo">
          <Header />
        </div>
        <section id="planetas">
          <SolarSystem />
        </section>
        <section id="todas-missoes">
          <Missions />
        </section>
      </div>
    );
  }
}

export default App;
