import React from 'react';
import './css/main.css';

import {UnControlled as CodeMirror} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');


function App() {
  return (
    <div className="row">
      <div className="col s12 section">          
        <span className="flow-text">ARM assembly language debugger</span>
        <div className="divider"/>
      </div>
      <div className="col s10 offset-m1 flex">
        <div className="col m6 s10 teal lighten-4 ">
          <span className="flow-text">Assembly code input</span>
          <CodeMirror 
            className="codeMirror"
            value='<h1>I ♥ react-codemirror2</h1>'
            options={{
              mode: 'python',
              theme: 'darcula',
              lineNumbers: true
            }}
          />
        </div>
        <div className="col m6 s10 teal lighten-2">
          <span className="flow-text">Debbuger view</span>
        </div>
      </div>
    </div>
  );
}

export default App;
