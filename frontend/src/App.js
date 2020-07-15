import React from 'react';
import './css/main.css';

import {UnControlled as CodeMirror} from 'react-codemirror2';
import Button from '@material-ui/core/Button';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';

require('codemirror/mode/xml/xml');
require('codemirror/mode/gas/gas')
require('codemirror/mode/javascript/javascript');


const initialCode = `
.text             
.global _start
_start:
    mov r0, #1
    ldr r1, =message
    ldr r2, =len
    mov r7, #4
    swi 0

    mov r7, #1
    swi 0

.data
message:
    .asciz "hello world\\n"
len = .-message`

function App() {
  return (
    <div className="row">
      <div className="col s12 section">          
        <span className="flow-text">ARM assembly language debugger</span>
        <div className="divider"/>
      </div>
      <div className="col s10 offset-m1 flex">
        <div className="col m6 s10 teal lighten-4 " style={{padding:'10px'}}>
          <span className="flow-text">Assembly code input</span>
          <div className="divider"/>
          <CodeMirror 
            className="codeMirror"
            value={initialCode}
            options={{
              mode: 'gas',
              theme: 'darcula',
              lineNumbers: true
            }}
          />
        <div className="buttonsPane">
          <Button variant="contained" color="primary">Clear</Button>
          <Button variant="contained" color="primary">Run</Button>
        </div>
        
        </div>
        <div className="col m6 s10 teal lighten-2" style={{padding:'10px'}}>
          <span className="flow-text">Debbuger view</span>
          <div className="divider"/>
        </div>
      </div>
      <div className="col s12 section">          
        <span className="flow-text">Created by Mateusz Kalinowski (mat-kalinowski)</span>
        <div className="divider"/>
      </div>
    </div>
  );
}

export default App;
