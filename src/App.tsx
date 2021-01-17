import React from 'react';
import { Loading } from './components/loading/loading';
import './app.css'

function App() {
  return (
    <div className="App">
      {/* Added animated bg*/}
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="loadingCard"><Loading /></div>
    </div>
  );
}

export default App;
