import React from "react";
import Path from '../Path';

function Board() {
    return (
        <div id="board1" className="home board1 container-fluid">
          <div className="row logo-container">
            <div className="col">
                <h1 className="montBold">TGIF</h1>
                <p className="descriptive">Settle the same old questions with a few simple clicks.</p>
                <h2 className="oswald">ARGUE LESS. <span className="relax">RELAX MORE.</span></h2>    
            </div>
          </div>
          <Path/>
        </div>
    );
  }

  export default Board;