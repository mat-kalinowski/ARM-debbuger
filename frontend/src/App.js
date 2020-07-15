import React from 'react';
import './css/main.css';

function App() {
  return (
    <div className="row">
      <div className="col s10 offset-m1 flex">
        <div className="col m6 s10 teal lighten-4"><span className="flow-text">
          Assembly code input
          </span>
          <textarea></textarea>
        </div>
        <div className="col m6 s10 teal lighten-2"><span className="flow-text">Debbuger view</span></div>
      </div>
    </div>
  );
}

export default App;
