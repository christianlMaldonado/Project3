import React from 'react';
import Navbar from "./components/studentPortal/Navbar/Navbar";
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
      </div>
    );
}

export default App;
